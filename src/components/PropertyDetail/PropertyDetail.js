import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import Loader from "../Loader/Loader";
import Api from "../../utils/api";
import config from "bootstrap/js/src/util/config";
import {useKeycloak} from "@react-keycloak/web";

function PropertyDetail() {
  const [like, setLike] = useState(false);
  const [favIcon, setFavIcon] = useState(<i className="bi bi-heart"></i>);
  const [houseData, setHouseData] = useState(null);
  let navigate = useNavigate();
  const { id } = useParams();
  const { keycloak }  = useKeycloak()
  useEffect(()=>{
      Api.get("/api/v1/properties/"+ id).then(response => {
        setHouseData(response.data)
      }).catch(error => {
        console.log(error)
      })
  }, [id]);

  const favorite = () => {
            Api.put(`/api/v1/properties/${id}/favoriteToggle`, { }, {
                headers: keycloak?.token ? {authorization: `Bearer ${keycloak?.token}`} : {}
            }).then(response => {
                if (!like) {
                    setFavIcon(<i className="bi bi-heart-fill"></i>);
                 } else {
                    setFavIcon(<i className="bi bi-heart"></i>);
                 }
                setLike(!like);
            }).catch(error => {
                console.log(error)
            })
  };
  return (
    <Container>
      <div>
        {houseData ? (
          <Card style={{ marginTop: "55px" }}>
            <Row>
              <Col>
                <Card.Img variant="top" src={houseData?.photos[0]?.url} />
              </Col>
              <Col>
                <Card.Body>
                  <div onClick={() => favorite(setLike(!like))}>{favIcon}</div>
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

                      navigate("/properties/"+id+"/applications/new")
                    }
                  >
                    Contact
                  </Button>
                <Button className="m-2" variant="outline-warning" onClick={() =>
                    navigate("/properties/"+id+"/questions/new")
                }>
                    Need more details
                  </Button>
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