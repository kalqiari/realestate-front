import React from "react";
import { Col, Row, Button, Popover, OverlayTrigger } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import AdminDropDown from "./Dropdowns/AdminDropDown/AdminDropDown";
import CustomerDropDown from "./Dropdowns/CustomerDropDown/CustomerDropDown";
import OwnerDropDown from "./Dropdowns/OwnerDropDown/OwnerDropDown";
import "./Header.css";

function Header() {
  return (
    <Container fluid className="mb-3">
      <Row className="p-3" style={{ border: "2px red groove" }}>
        <Col>
          <Link className="link-route" to="/">
            <h2 style={{ color: "Blue" }}>Buy/Rent_A_House</h2>
          </Link>
        </Col>
        <Col md={6}>
          <Row>
            <Col>
              <Link className="link-route" to="/admin">
                <AdminDropDown>
                  <h4 style={{ color: "purple" }}>Admin</h4>
                </AdminDropDown>
              </Link>
            </Col>
            <Col>
              <Link className="link-route" to="/customer">
                <CustomerDropDown>
                  <h4 style={{ color: "orange" }}>Customer</h4>
                </CustomerDropDown>
              </Link>
            </Col>
            <Col>
              <Link className="link-route" to="/owner">
                <OwnerDropDown>
                  <h4 style={{ color: "grey" }}>Owner</h4>
                </OwnerDropDown>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col className="d-flex justify-content-end">
              <Button variant="outline-success" className=" m-2">
                Sign In
              </Button>

              <Button variant="outline-info" className="m-2">
                Sign Up
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    // </Navbar>
  );
}

export default Header;
