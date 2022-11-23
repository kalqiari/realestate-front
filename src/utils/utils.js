import {Navigate, Outlet, useLocation, useNavigate} from 'react-router-dom'
import {useKeycloak} from "@react-keycloak/web";
import {useEffect} from "react";
import LoginPage from "../pages/LoginPage";
import Loader from "../components/Loader/Loader";

const PrivateRoutes = () => {
    const {keycloak, initialized} = useKeycloak();
    const location=useLocation();

    useEffect(() => {
        if (initialized && !keycloak?.authenticated) {
            keycloak?.login();
        }
    }, [keycloak?.authenticated, initialized]);

    return (
        initialized ? keycloak?.authenticated ? <Outlet/> :  <LoginPage/> : <Loader />
    )
}

export default PrivateRoutes