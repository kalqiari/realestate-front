import React from "react";
import {
  Container,
  Row,
  Col,
  Spinner,
  Card,
  ProgressBar,
} from "react-bootstrap";
import houseImage from "../../resources/images/house.jpg";

function Application() {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={houseImage} />
            <Card.Body>
              <Card.Title>Price: $250,000</Card.Title>
              <Card.Text>3bds | 2 ba | 243sqFT</Card.Text>
              <div>
                Status: Pending{" "}
                <span>
                  <Spinner animation="grow" variant="info" />
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={houseImage} />
            <Card.Body>
              <Card.Title>Price: $750,000</Card.Title>
              <Card.Text>3bds | 2 ba | 243sqFT</Card.Text>
              <div>
                Status:Approved{" "}
                <span>
                  <ProgressBar animated now={100} />
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={houseImage} />
            <Card.Body>
              <Card.Title>Price: $100,000</Card.Title>
              <Card.Text>3bds | 2 ba | 243sqFT</Card.Text>
              <div>
                Status:Rejected{" "}
                <span>
                  <ProgressBar variant="danger" now={100} />
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Application;
