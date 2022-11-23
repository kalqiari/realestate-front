import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import PropertyCard from "../reusable/PropertyCard/PropertyCard";
import houseImage from "../resources/images/house.jpg";

const propertyData = [
  {
    image: houseImage,
    price: "$250000",
    houseDetails: " 3 bds | 2 ba | 1,462 sqft | House for sale",
    location: "1964 Savanna Cir, Fairfield, IA 52556",
  },
  {
    image: houseImage,
    price: "$250000",
    houseDetails: " 3 bds | 2 ba | 1,462 sqft | House for sale",
    location: "1964 Savanna Cir, Fairfield, IA 52556",
  },
  {
    image: houseImage,
    price: "$250000",
    houseDetails: " 3 bds | 2 ba | 1,462 sqft | House for sale",
    location: "1964 Savanna Cir, Fairfield, IA 52556",
  },
  {
    image: houseImage,
    price: "$250000",
    houseDetails: " 3 bds | 2 ba | 1,462 sqft | House for sale",
    location: "1964 Savanna Cir, Fairfield, IA 52556",
  },
  {
    image: houseImage,
    price: "$250000",
    houseDetails: " 3 bds | 2 ba | 1,462 sqft | House for sale",
    location: "1964 Savanna Cir, Fairfield, IA 52556",
  },
  {
    image: houseImage,
    price: "$250000",
    houseDetails: " 3 bds | 2 ba | 1,462 sqft | House for sale",
    location: "1964 Savanna Cir, Fairfield, IA 52556",
  },
  {
    image: houseImage,
    price: "$250000",
    houseDetails: " 3 bds | 2 ba | 1,462 sqft | House for sale",
    location: "1964 Savanna Cir, Fairfield, IA 52556",
  },
  {
    image: houseImage,
    price: "$250000",
    houseDetails: " 3 bds | 2 ba | 1,462 sqft | House for sale",
    location: "1964 Savanna Cir, Fairfield, IA 52556",
  },
];

function WelcomePage() {
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
              <Col md={3}>
                <PropertyCard
                  image={house.image}
                  price={house.price}
                  houseDetails={house.houseDetails}
                  location={house.location}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default WelcomePage;
