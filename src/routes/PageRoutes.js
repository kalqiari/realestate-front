import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SecuredPage from "../pages/SecuredPage";
import keycloak from "../keycloak";
import LoginPage from "../pages/LoginPage";
import Header from "../components/Header/Header";
import PropertyDetail from "../components/PropertyDetail/PropertyDetail";
import { AdminRoutes, OwnerRoutes, CustomerRoutes } from "../utils/utils";
import Dashboard from "../pages/admin/Dashboard";
import NewApplication from "../components/NewApplication/NewApplication";
import Application from "../components/Application/Application";
import NewProperty from "../components/NewProperty/NewProperty";
import Applications from "../components/Applications/Applications";
import Question from "../components/Question/Question";
import Properties from "../components/Properties/Properties";
import Offer from "../components/Offer/Offer";
import Error404 from "../pages/Error404";

function PageRoutes() {
  const eventLogger = (props) => {
    console.log(props);
  };
  const tokenLogger = (eventType) => {
    switch (eventType) {
      case "onReady":
        break;
      case "onInitError":
        break;
      case "onAuthSuccess":
        console.log("onAuthSuccess");
        break;
      case "onAuthError":
        break;
      case "onAuthRefreshSuccess":
        console.log("onAuthRefreshSuccess");
        break;
      case "onAuthRefreshError":
        break;
      case "onTokenExpired":
        break;
      case "onAuthLogout":
        break;
    }
  };
  return (
    <div>
      <ReactKeycloakProvider
        initOptions={{
          onLoad: "check-sso",
          silentCheckSsoRedirectUri:
            "http://localhost:3000/silent-check-sso.html",
          enableLogging: true,
          checkLoginIframe: false,
        }}
        authClient={keycloak}
        onEvent={eventLogger}
        onTokens={tokenLogger}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='*' element={<Error404 />} />
            <Route element={<AdminRoutes />}>
              <Route path="/admin" element={<Dashboard />} />
            </Route>       
            <Route element={<OwnerRoutes />}>
              <Route path="/owner" element={<SecuredPage />} />
              <Route path="/newProperty" element={<NewProperty />} />
            </Route>
            <Route element={<CustomerRoutes />}>
              <Route path="/property/:id/application/new" element={<NewApplication />} />
              <Route path="/application" element={<Application />} />
              <Route path="/question" element={<Question />} />
            </Route>
            <Route path="/properties" element={<Properties />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/offers" element={<Offer />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
}

export default PageRoutes;
