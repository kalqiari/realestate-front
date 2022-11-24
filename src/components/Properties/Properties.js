import React, {useContext, useEffect, useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Property from "../Property/Property";
import keycloak from "../../keycloak";
import axios from "axios";

function Properties() {
  const [propertiesData, setPropertiesData]= useState([]);
  useEffect(()=>{
       axios.get("http://localhost:8080/api/v1/properties").then(response => {
           setPropertiesData( response.data)
                  }).catch(error => {
                      console.log(error)
                  })

  },[] )

  return (
    <div>
      <Container>
        <Row>
          {propertiesData.map((house) => {
            return (
              <Col md={3} key={house.id}>
                <Link
                  to={`/property/${house.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Property
                      house={house}
                  />
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Properties;
