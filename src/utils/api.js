import axios from "axios";
import keycloak from "../keycloak";


const Api = axios.create({
    baseURL: "http://localhost:8080"
})

Api.interceptors.request.use(
    config => {
        const token = keycloak?.token
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
)

export default Api