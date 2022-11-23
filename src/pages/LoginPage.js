import {useCallback, useEffect} from 'react'
import {useLocation, useNavigate, useParams, useSearchParams} from 'react-router-dom'
import {useKeycloak} from "@react-keycloak/web";

const LoginPage = () => {

    const {keycloak, initialized} = useKeycloak()
    const navigate = useNavigate()
    const location = useLocation()
    const {params} = useSearchParams({})
    const from = location.state?.from || "/";

    const login = useCallback(() => {
        keycloak?.login();
    }, [keycloak])

    useEffect(() => {
        if (keycloak?.authenticated) {
            console.log("user authinticated")
            navigate(from, {replace: true});
        } else {
            if (initialized) login();
        }
    }, [keycloak, initialized])


}

export default LoginPage
