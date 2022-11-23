import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
    url: "http://ec2-3-144-44-198.us-east-2.compute.amazonaws.com/",
    realm: "realestate",
    clientId: "frontend",
    clientSecret: "jO96EHjDMhRVf4fFTlgZou7xVfXq2DI1"
});

export default keycloak;