import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import houseImage from "../../resources/images/house.jpg";
import Button from "react-bootstrap/Button";
// {
//     "propertyId": 22,
//     "applicationType": null,
//     "employmentInfo": "test",
//     "creditScore": 400.0,
//     "reviewStatus": null,
//     "message": "test",
//     "droppedAt": null,
//     "createdAt": null,
//     "reviewedAt": null,
//     "deletedAt": null,
//     "property": {
//     "id": 22,
//         "userId": 2,
//         "streetAddress": "231N 1st St",
//         "address2": "KKK Lane",
//         "city": "Beverly Hills",
//         "state": "CA",
//         "zipcode": "23089",
//         "propertyStatus": null,
//         "listingType": "Sale",
//         "description": "beautiful mansion by the sea",
//         "price": 1.2E7,
//         "homeType": "mansion",
//         "sqFt": 81056.0,
//         "bedrooms": 8,
//         "bathrooms": 9.5,
//         "pool": true,
//         "parkingType": "open parking space",
//         "parkingSpaces": 3,
//         "floorType": "wood",
//         "yearBuilt": "1990-10-01T05:00:00.000+00:00",
//         "listedAt": "1990-10-01T05:00:00.000+00:00",
//         "deletedAt": "1990-10-01T05:00:00.000+00:00",
//         "status": null,
//         "photos": [
//         {
//             "id": 2,
//             "url": "https://photos.zillowstatic.com/fp/516277f76745f190c92f766ff6c1f59b-cc_ft_1536.webp"
//         }
//     ],
//         "builtComplete": true
// },
//     "id": 1
// }
function Offer(props) {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="mb-4">
                        <Card style={{ width: "18rem" }}>
                            <Card.Img width={280} height={210} variant="top" src={props.app.property.photos[0].url} />
                            <Card.Body>
                                <Card.Title>Customer Name: {props.app.user.firstName + ' ' + props.app.user.firstName} </Card.Title>
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
        </div>
    );
}

export default Offer;
