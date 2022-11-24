import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

function Property(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col className="mb-4">
            <Card>
              <Card.Img variant="top" src={props.image} />
              <Card.Body>
                <Card.Title>{props.price} </Card.Title>
                <Card.Text style={{ color: "purple" }}>
                  {props.houseDetails}
                </Card.Text>
                <Card.Text style={{ color: "red" }}>{props.location}</Card.Text>
                <Card.Text>VILLAGE REALITY</Card.Text>
                <div>
                  <i className="bi bi-heart"></i>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Property;
