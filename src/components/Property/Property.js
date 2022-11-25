import React, { useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

// {
//   "id": 22,
//      "owner":1
//     "streetAddress": "2316N 1st St",
//     "address2": "KKK Lane",
//     "city": "Beverly Hills",
//     "state": "California",
//     "zipcode": "230089",
//     "listingType": "Sale",
//     "description": "beautiful mansion by the sea",
//     "price": 1.2E7,
//     "homeType": "mansion",
//     "sqFt": 81056.09,
//     "bedrooms": 8,
//     "bathrooms": 9.5,
//     "pool": true,
//     "parkingType": "open parking space",
//     "parkingSpaces": 3,
//     "floorType": "wood",
//     "yearBuilt": "1990-10-01T05:00:00.000+00:00",
//     "listedAt": "1990-10-01T05:00:00.000+00:00",
//     "deletedAt": "1990-10-01T05:00:00.000+00:00",
//     "status": null,
//     "photos": [
//   {
//     "id": 2,
//     "url": "https://photos.zillowstatic.com/fp/516277f76745f190c92f766ff6c1f59b-cc_ft_1536.webp"
//   }
// ],
//     "builtComplete": true
// }
//
// {
//   id: "1",
//       image: houseImage,
//     price: "$250000",
//     houseDetails:
//     location: "1964 Savanna Cir, Fairfield, IA 52556",
// },
function Property(props) {
  const [fav, setFav] = useState(false);
  const [favIcon, setFavIcon] = useState(<i className="bi bi-heart"></i>);

  const Favorites = () => {
    if (fav) {
      setFavIcon(<i className="bi bi-heart"></i>);
      console.log("Propety not favorite");
    } else {
      setFavIcon(<i class="bi bi-heart-fill"></i>);
      console.log("Propety is favorite");
    }
  };
  return (
    <div>
      <Container>
        <Row>
          <Col className="mb-4">
            <Card>
              <Card.Img
                width={280}
                height={210}
                variant="top"
                src={props.house?.photos[0]?.url}
              />
              <Card.Body>
                <Card.Title>{props.house?.price} </Card.Title>
                <Card.Text style={{ color: "purple" }}>
                  {props.house?.bedrooms +
                    " bds | " +
                    props.house?.bathrooms +
                    " ba |" +
                    props.house?.sqFt +
                    " sqft | House for " +
                    props.house?.listingType}
                </Card.Text>
                <Card.Text style={{ color: "red" }}>
                  {props.house.streetAddress +
                    ", " +
                    props.house.city +
                    ", " +
                    props.house.state +
                    " " +
                    props.house.zipcode}
                </Card.Text>
                <Card.Text>{props.house.status}</Card.Text>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Property;
