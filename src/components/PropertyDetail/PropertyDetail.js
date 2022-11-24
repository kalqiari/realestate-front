import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams, useNavigate } from "react-router";
import { dummyDataContext } from "../contexts/ContextFile";

function PropertyDetail() {
  const [houseData, setHouseData] = useState([]);
  const dummyData = useContext(dummyDataContext);
  let navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const singlePropertyData = dummyData.filter(
      (property) => property.id == id
    );
    setHouseData(singlePropertyData);
  }, [id]);
  return (
    <Container>
      <div>
        {houseData.length > 0 ? (
          <Card style={{ marginTop: "55px" }}>
            <Row>
              <Col>
                <Card.Img variant="top" src={houseData[0].image} />
              </Col>
              <Col>
                <Card.Body>
                  <div>
                    <i class="bi bi-heart"></i>
                  </div>
                  <Card.Title>Price: {houseData[0].price} </Card.Title>
                  <Card.Text style={{ color: "purple" }}>
                    {houseData[0].houseDetails}
                  </Card.Text>
                  <Card.Text style={{ color: "red" }}>
                    {houseData[0].location}
                  </Card.Text>
                  <Button
                    className="m-2 px-5"
                    variant="outline-success"
                    onClick={() =>
                      navigate("/application", {
                        state: { id: id },
                      })
                    }
                  >
                    Contact
                  </Button>
                  {/* <Button className="m-2" variant="outline-warning">
                    Request a tour
                  </Button> */}
                  <div>
                    <ul>
                      <li>Home Type</li>
                      <li>Square feet</li>
                      <li>Bedrooms</li>
                      <li>Bathrooms</li>
                      <li>Pool: Yes</li>
                      <li>ParkingSpace</li>
                      <li>FloorType</li>
                    </ul>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        ) : (
          <>
            <Spinner animation="border" variant="warning" />
            <Spinner animation="border" variant="success" />
            <Spinner animation="border" variant="danger" />
          </>
        )}
      </div>
    </Container>
  );
}

export default PropertyDetail;
