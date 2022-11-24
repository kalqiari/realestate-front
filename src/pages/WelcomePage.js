import React from "react";
import { Row } from "react-bootstrap";
import Properties from "../components/Properties/Properties";

function WelcomePage() {
  return (
    <div>
      <Row className="m-5">
        <h1 className="text-center" style={{ color: "chocolate" }}>
          FIND IT, OWN IT, RENT IT
        </h1>
      </Row>
      <Properties />
    </div>
  );
}

export default WelcomePage;
