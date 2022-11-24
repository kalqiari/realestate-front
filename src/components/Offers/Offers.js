import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import houseImage from "../../resources/images/house.jpg";

function Offers(props) {
  return (
    <Container>
      <Row className="mb-5">
        <Col md={{ offset: 3, span: 5 }}>
          <h2 style={{ color: "purple" }} className="text-center">
            OFFERS
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={houseImage} />
            <Card.Body>
              <Card.Title>Customer Name: Loose Criminal</Card.Title>
              <Card.Text>
                {" "}
                <b>Application Type:</b>Rent
              </Card.Text>
              <Card.Text>
                <b>Employment Info:</b> Criminal
              </Card.Text>
              <Card.Text>
                <b>Credit Score:</b> 7
              </Card.Text>
              <Card.Text>
                <b>Message:</b> I'll be paying it timely with stolen money
              </Card.Text>
              <Row>
                <Col>
                  <Button style={{ width: "100%" }} variant="success">
                    Accept
                  </Button>
                </Col>
                <Col>
                  <Button style={{ width: "100%" }} variant="danger">
                    Decline
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Offers;
