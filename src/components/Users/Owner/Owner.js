import React from "react";
import { Col, Row } from "react-bootstrap";
import Properties from "../../Properties/Properties";

function Owner() {
  return (
    <div>
      <Row className="m-5">
        <Col md={9}>
          <h1 className="text-center" style={{ color: "chocolate" }}>
            Your Properties
          </h1>
          <Properties />
        </Col>
        <Col md={3}>
          <h1 className="text-center" style={{ color: "chocolate" }}>
            Applications
          </h1>
          <h1>None...:)</h1>
        </Col>
      </Row>
    </div>
  );
}

export default Owner;
