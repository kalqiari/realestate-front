import React, {useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";

import {useSearchParams} from "react-router-dom";
import {useKeycloak} from "@react-keycloak/web";
import Api from "../../utils/api";
import Offer from "../Offer/Offer";


function Offers(props) {
  const [applicationsData, setApplicationsData] = useState([]);
  const [searchParams] = useSearchParams()
  const {keycloak} = useKeycloak();

  useEffect(() => {
    Api.get("/api/v1/applications", {
      params: searchParams,
      headers: keycloak?.token ? {authorization: `Bearer ${keycloak?.token}`} : {}
    }).then(response => {
      setApplicationsData(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [keycloak?.authenticated,searchParams ])

  return (
      <div>
        <Container>
          <Row>
            {applicationsData.map((application) => {
              return (
                  <Col md={3} key={application.id}>
                      <Offer
                          app={application}
                      />
                  </Col>
              );
            })}
          </Row>
        </Container>
      </div>
  );
}

export default Offers;
