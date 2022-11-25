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
import Button from "react-bootstrap/Button";



function Application(props) {

  const status  = (props.app.reviewStatus == "Pending" ?
    <div>
      Status: {props.app.reviewStatus}{" "}
      <span><ProgressBar variant="info" now={0} /></span>
    </div>
: props.app.reviewStatus == "Accepted" ?
        <div>
          Status: {props.app.reviewStatus}{" "}
          <span><ProgressBar variant="success" now={100} /></span>
        </div>

      :
        <div>
          Status: {props.app.reviewStatus}{" "}
          <span><ProgressBar variant="danger" now={100} /></span>
        </div>
   )
  return (
    <div>
      <Container>
        <Row>
          <Col className="mb-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                width={280}
                height={210}
                variant="top"
                src={props.app.property.photos[0].url}
              />
              <Card.Body>
                <Card.Title>Price: {props.app.property.price}</Card.Title>
                <Card.Text>{props.app.property.bedrooms}bds | {props.app.property.bathrooms} ba | {props.app.property.sqFT} sqFT</Card.Text>
                {status}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Application;
