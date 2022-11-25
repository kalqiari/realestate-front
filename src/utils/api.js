import axios from "axios";
import keycloak from "../keycloak";

axios.interceptors.request.use(async config => {

    if (typeof window == 'undefined') {
        return;
    }
    const accessToken = keycloak?.token;



    config.headers = {
        ...config.headers
    };
    if (accessToken) {
        config.headers.authorization = `Bearer ${accessToken}`;
    }

    return config;
});

const Api = axios.create({
    baseURL: "http://localhost:8080"
})




export default Api
