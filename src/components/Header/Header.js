import React, {useEffect, useState} from "react";
import { Col, Row, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import "./Header.css";
import {useKeycloak} from "@react-keycloak/web";
import ViewerHeader from "./ViewerHeader/ViewerHeader";
import AdminHeader from "./AdminHeader/AdminHeader";
import OwnerHeader from "./OwnerHeader/OwnerHeader";
import CustomerHeader from "./CustomerHeader/CustomerHeader";

const Header= () => {
    const {keycloak, initialized} = useKeycloak();
    const [loginState, setLoginState] = useState(null);
    const [headerState, setHeaderState] = useState(<ViewerHeader/>);


    useEffect(()=> {
        setLoginState(  initialized &&  !keycloak.authenticated ?
            <Row>
                <Col className="d-flex justify-content-end">
                    <Button variant="outline-success" className=" m-2" onClick={()=> {window.location.href = keycloak.createLoginUrl({redirectUri: "http://localhost:3000"})}}>
                        Sign In
                    </Button>

                    <Button variant="outline-info" className="m-2" onClick={()=> {
                        window.location.href = keycloak.createRegisterUrl({redirectUri: "http://localhost:3000"})
                    }}>
                        Sign Up
                    </Button>
                </Col>
            </Row>
             : initialized ? <Row>
                <Col className="d-flex justify-content-end">
                    <Button variant="outline-info" className=" m-2" onClick={()=> {window.location.href = keycloak.createLogoutUrl({redirectUri: "http://localhost:3000"})}}>
                        Sign out
                    </Button>
                </Col>
            </Row> : null)
        if(initialized &&  keycloak.authenticated)
        {
            if(keycloak.hasResourceRole('admin'))
                setHeaderState(<AdminHeader/>)
            else if(keycloak.hasResourceRole('owner'))
                setHeaderState(<OwnerHeader/>)
            else if(keycloak.hasResourceRole('customer'))
                setHeaderState(<CustomerHeader/>)
            else setHeaderState(<ViewerHeader/>)
        }
    }, [initialized , keycloak?.authenticated])


  return (
    <Container fluid className="mb-3">
      <Row className="p-3" style={{ border: "1px red groove" }}>
        <Col>
          <Link className="link-route" to="/">
            <h2 style={{ color: "Blue" }}>Buy/Rent_A_House</h2>
          </Link>
        </Col>
          <Col md={6}>
          {headerState}
          </Col>
        <Col>
            {loginState}
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
