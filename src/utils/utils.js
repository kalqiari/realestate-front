import {Navigate, Outlet, useLocation, useNavigate} from 'react-router-dom'
import {useKeycloak} from "@react-keycloak/web";
import {useEffect} from "react";

const PrivateRoutes = () => {
    const {keycloak} = useKeycloak();
    const location=useLocation();

    return (
    keycloak?.authenticated ? <Outlet/> :  <Navigate to={'/login'} state={{ from: location }} replace />
    )
}

export default PrivateRoutes