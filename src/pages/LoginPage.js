import * as React from 'react'
import { useCallback } from 'react'
import {Navigate, useLocation} from 'react-router-dom'
import {useKeycloak} from "@react-keycloak/web";

const LoginPage = () => {
    const location = useLocation()
    const locationState = location.state;
    const { keycloak } = useKeycloak()

    const login = useCallback(() => {
        keycloak?.login()
    }, [keycloak])

    if (keycloak?.authenticated)
        return <Navigate to={"/" } />

    return <h1>"test"</h1>
}

export default LoginPage