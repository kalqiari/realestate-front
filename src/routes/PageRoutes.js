import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import SecuredPage from "../pages/SecuredPage";
import keycloak from "../keycloak";
import LoginPage from "../pages/LoginPage";
import PrivateRoutes from "../utils/utils";


function PageRoutes() {
    const eventLogger = (props) =>{
        console.log(props);
    }
    const tokenLogger = (t) =>{
        console.log(t);
    }
    return (
        <div>

            <ReactKeycloakProvider  initOptions={{ onLoad: 'check-sso',
                silentCheckSsoRedirectUri:  "http://localhost:3000/silent-check-sso.html",
                 enableLogging: true,  checkLoginIframe: false }} authClient={keycloak} onEvent={eventLogger} onTokens={tokenLogger} >
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<LoginPage/>} />
                        <Route path="/" element={<WelcomePage />} />
                        <Route element={<PrivateRoutes />}>
                            <Route path="/secured" element={<SecuredPage/>} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ReactKeycloakProvider>
        </div>
    );
}

export default PageRoutes;