import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Property from "../Property/Property";

import { dummyDataContext } from "../contexts/ContextFile";

function Properties() {
  const propertyData = useContext(dummyDataContext);
  return (
    <div>
      <Container>
        <Row className="m-5">
          <h1 className="text-center" style={{ color: "chocolate" }}>
            FIND IT, OWN IT, RENT IT
          </h1>
        </Row>
        <Row>
          {propertyData.map((house) => {
            return (
              <Col md={3} key={house.id}>
                <Link to={`/${house.id}`} style={{ textDecoration: "none" }}>
                  <Property
                    image={house.image}
                    price={house.price}
                    houseDetails={house.houseDetails}
                    location={house.location}
                  />
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Properties;
