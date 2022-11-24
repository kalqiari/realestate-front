import {Outlet} from 'react-router-dom'
import {useKeycloak} from "@react-keycloak/web";
import {useEffect} from "react";
import LoginPage from "../pages/LoginPage";
import Loader from "../components/Loader/Loader";

const PrivateRoutes = () => {
    const {keycloak, initialized} = useKeycloak();
    useEffect(() => {
        if (initialized && !keycloak?.authenticated) {
            keycloak?.login();
        }
    }, [keycloak?.authenticated, initialized]);

    return (
        initialized ? keycloak?.authenticated ? <Outlet/> :  <LoginPage/> : <Loader />
    )
}

export default PrivateRoutes;

export const AdminRoutes = () => {
    const {keycloak, initialized} = useKeycloak();
    useEffect(() => {
        if (initialized && !keycloak?.authenticated) {
            keycloak?.login();
        }

    }, [keycloak?.authenticated, initialized]);


    if(initialized)
    {
            if(keycloak?.authenticated && keycloak?.hasResourceRole('admin'))
                return <Outlet/>
            else if (keycloak?.authenticated)
                return null;
            else
                return <LoginPage/>
    }
    else  return <Loader />
}

export const OwnerRoutes = () => {
    const {keycloak, initialized} = useKeycloak();
    useEffect(() => {
        if (initialized && !keycloak?.authenticated) {
            keycloak?.login();
        }

    }, [keycloak?.authenticated, initialized]);


    if(initialized)
    {
        if(keycloak?.authenticated && keycloak?.hasResourceRole('owner'))
            return <Outlet/>
        else if (keycloak?.authenticated)
            return null;
        else
            return <LoginPage/>
    }
    else  return <Loader />
}


export const CustomerRoutes = () => {
    const {keycloak, initialized} = useKeycloak();
    useEffect(() => {
        if (initialized && !keycloak?.authenticated) {
            keycloak?.login();
        }

    }, [keycloak?.authenticated, initialized]);


    if(initialized)
    {
        if(keycloak?.authenticated && keycloak?.hasResourceRole('customer'))
            return <Outlet/>
        else if (keycloak?.authenticated)
            return null;
        else
            return <LoginPage/>
    }
    else  return <Loader />
}