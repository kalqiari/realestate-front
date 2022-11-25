import React, {useContext, useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link, useSearchParams} from "react-router-dom";

import Property from "../Property/Property";
import Api from "../../utils/api";
import {useParams} from "react-router";
import {useKeycloak} from "@react-keycloak/web";
import Search from "../Search/Search";


function Properties() {
    const [propertiesData, setPropertiesData] = useState([]);
    const [searchParams] = useSearchParams()
    const {keycloak} = useKeycloak();
    useEffect(() => {
        Api.get("/api/v1/properties", {
            params: searchParams,
            headers: keycloak?.token ? {authorization: `Bearer ${keycloak?.token}`} : {}
        }).then(response => {
            setPropertiesData(response.data)
        }).catch(error => {
            console.log(error)
        })
    }, [keycloak?.authenticated,searchParams ])

    return (
        <div>
            <Search/>
            <Container>
                <Row>
                    {propertiesData.map((house) => {
                        return (
                            <Col md={3} key={house.id}>
                                <Link
                                    to={`/properties/${house.id}`}
                                    style={{textDecoration: "none"}}
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
