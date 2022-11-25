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


function Application(props) {
  return (
      <div>
      <Container>
        <Row >
          <Col className="mb-4">
            <Card style={{width: "18rem"}}>
              <Card.Img width={280} height={210}  variant="top" src={props.app.property.photos[0].url} />
              <Card.Body>
                <Card.Title>Price: {props.app.property.price}</Card.Title>
                <Card.Text>{props.app.property.bedrooms}bds | {props.app.property.bathrooms} ba | {props.app.property.sqft}sqFT</Card.Text>
                <div>
                  Status: Pending{" "}
                  <span>
                  <ProgressBar variant="warning" now={0} />
                </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      </div>
  );
}

export default Application;

