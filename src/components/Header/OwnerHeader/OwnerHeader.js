import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";

const OwnerHeader = () => {
    return (
            <Row>
                <Col>
                    <Link className="link-route" to="/owner/properties">
                        <h4 style={{color: "purple"}}>My Properties</h4>
                    </Link>
                </Col>
                <Col>
                    <Link className="link-route" to="/owner/properties/new">
                        <h4 style={{color: "orange"}}>New Property</h4>
                    </Link>
                </Col>
                <Col>
                    <Link className="link-route" to="/owner/applications">
                        <h4 style={{color: "orange"}}>Offers</h4>
                    </Link>
                </Col>
            </Row>
    )
}

export default OwnerHeader;