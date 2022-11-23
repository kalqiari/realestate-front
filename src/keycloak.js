import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
    url: "http://ec2-3-144-44-198.us-east-2.compute.amazonaws.com/",
    realm: "realestate",
    clientId: "frontend",
    // clientSecret: "huvuCWGXPr01pWLgfH09flV4852y2xcr"
});

export default keycloak;