import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Application from "../Application/Application";

function Applications() {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="text-center">Your Applications</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Application />
        </Col>
      </Row>
    </Container>
  );
}

export default Applications;
