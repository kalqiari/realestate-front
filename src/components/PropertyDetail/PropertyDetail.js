import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import houseImage from "../../resources/images/house.jpg";

function PropertyDetail() {
  return (
    <Container>
      <Card style={{ marginTop: "55px" }}>
        <Row>
          <Col>
            <Card.Img variant="top" src={houseImage} />
          </Col>
          <Col>
            <Card.Body>
              <div>
                <i class="bi bi-heart"></i>
              </div>
              <Card.Title>Price: "$250000" </Card.Title>
              <Card.Text style={{ color: "purple" }}>
                " 3 bds | 2 ba | 1,462 sqft | House for sale"
              </Card.Text>
              <Card.Text style={{ color: "red" }}>
                "1964 Savanna Cir, Fairfield, IA 52556"
              </Card.Text>
              <Button className="m-2" variant="outline-success">
                Contact Agent
              </Button>
              <Button className="m-2" variant="outline-warning">
                Request a tour
              </Button>
              <Card.Text>
                <ul>
                  <li>Home Type</li>
                  <li>Square feet</li>
                  <li>Bedrooms</li>
                  <li>Bathrooms</li>
                  <li>Pool: Yes</li>
                  <li>ParkingSpace</li>
                  <li>FloorType</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default PropertyDetail;
{
  /* <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */
}
