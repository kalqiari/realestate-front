import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import SecuredPage from "../pages/SecuredPage";
import keycloak from "../keycloak";
import PrivateRoute from "../utils/utils";
import LoginPage from "../pages/LoginPage";


function PageRoutes() {

    const eventLogger = (props) =>{
        console.log(props);
    }
    const tokenLogger = (t) =>{
        console.log(t);
    }
    return (
        <div>

            <ReactKeycloakProvider  initOptions={{
                 enableLogging: true,  checkLoginIframe: true }} authClient={keycloak} onEvent={eventLogger} onTokens={tokenLogger} >
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<LoginPage/>} />
                        <Route path="/" element={<WelcomePage />} />
                        <Route path="/secured" element={<PrivateRoute><SecuredPage/></PrivateRoute>} />
                    </Routes>
                </BrowserRouter>
            </ReactKeycloakProvider>
        </div>
    );
}

export default PageRoutes;