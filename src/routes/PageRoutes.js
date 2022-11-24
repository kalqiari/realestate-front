import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
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
import NewQuestion from "../components/NewQuestion/NewQuestion";
import Properties from "../components/Properties/Properties";
import Offers from "../components/Offers/Offers";
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
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>       
            <Route element={<OwnerRoutes />}>
              <Route path="/owner/properties" element={<Properties />} />
              <Route path="/owner/properties/:id" element={<PropertyDetail />} />
              <Route path="/owner/properties/new" element={<NewProperty />} />
              <Route path="/owner/applications" element={<Offers />} />
            </Route>

            <Route element={<CustomerRoutes />}>
              <Route path="/properties/:id/applications/new" element={<NewApplication />} />
              <Route path="/properties/:id/questions/new" element={<NewQuestion />} />
              <Route path="/properties/:id/applications" element={<Application />} />
              <Route path="/applications" element={<Applications />} />
            </Route>

            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/properties/:id" element={<PropertyDetail />} />
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
}

export default PageRoutes;
