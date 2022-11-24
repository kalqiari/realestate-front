import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";

const CustomerHeader = () => {
    return (

            <Row>
                <Col>
                    <Link className="link-route" to="/">
                        <h4 style={{color: "purple"}}>Properties</h4>
                    </Link>
                </Col>
                <Col>
                    <Link className="link-route" to="/?favorite=true">
                        <h4 style={{color: "orange"}}>My Favorites</h4>
                    </Link>
                </Col>
                <Col>
                    <Link className="link-route" to="/applications">
                        <h4 style={{color: "grey"}}>My Applications</h4>
                    </Link>
                </Col>
                <Col>
                    <Link className="link-route" to="/applications">
                        <h4 style={{color: "grey"}}>Offer History</h4>
                    </Link>
                </Col>

            </Row>
    )
}

export default CustomerHeader;