import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams, useNavigate } from "react-router";
import { dummyDataContext } from "../contexts/ContextFile";
import axios from "axios";
import Loader from "../Loader/Loader";

function PropertyDetail() {
  const [houseData, setHouseData] = useState(null);
  let navigate = useNavigate();
  const { id } = useParams();


  useEffect(()=>{
      axios.get("http://localhost:8080/api/v1/properties/"+ id).then(response => {
        setHouseData(response.data)
      }).catch(error => {
        console.log(error)
      })
  }, [id]);
    

  return (
    <Container>
      <div>
        {houseData ? (
          <Card style={{ marginTop: "55px" }}>
            <Row>
              <Col>
                <Card.Img variant="top" src={houseData?.photos[0].url} />
              </Col>
              <Col>
                <Card.Body>
                  <div>
                    <i className="bi bi-heart"></i>
                  </div>
                  <Card.Title>Price: {houseData.price} </Card.Title>
                  <Card.Text style={{ color: "purple" }}>
                    {houseData?.bedrooms + " bds | " + houseData?.bathrooms +" ba |"+ houseData?.sqFt + " sqft | House for "+ houseData?.listingType}
                  </Card.Text>
                  <Card.Text style={{ color: "red" }}>
                    {houseData.streetAddress + ", "+ houseData.city+ ", "+houseData.state+ " " +houseData.zipcode}
                  </Card.Text>
                  <Button
                    className="m-2 px-5"
                    variant="outline-success"
                    onClick={() =>
                      navigate("/application", {
                        state: { id: id, name: "sabaoon" },
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
           <Loader/>
          </>
        )}
      </div>
    </Container>
  );
}

export default PropertyDetail;

// <Row>
//   <Col className="mb-4">
//     <Card>
//       <Card.Img width={280} height={210} variant="top" src={houseData?.photos[0].url} />
//       <Card.Body>
//         <Card.Title>{props.price} </Card.Title>
//         <Card.Text style={{ color: "purple" }}>
//           {houseData?.bedrooms + " bds | " + houseData?.bathrooms +" ba |"+ houseData?.sqFt + " sqft | House for "+ houseData?.listingType}
//         </Card.Text>
//         <Card.Text style={{ color: "red" }}>{houseData.streetAddress + ", "+ houseData.city+ ", "+houseData.state+ " " +houseData.zipcode }</Card.Text>
//         <Card.Text>VILLAGE REALITY</Card.Text>
//         <div>
//           <i className="bi bi-heart"></i>
//         </div>
//       </Card.Body>
//     </Card>
//   </Col>
// </Row>