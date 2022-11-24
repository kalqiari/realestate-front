import {Col, Row} from "react-bootstrap";
import {Link, Route} from "react-router-dom";
import React from "react";
import NewApplication from "../../NewApplication/NewApplication";
import Application from "../../Application/Application";
import Applications from "../../Applications/Applications";

const CustomerHeader = () => {
    return (

            <Row>
                <Col>
                    <Link className="link-route" to="/">
                        <h4 style={{color: "purple"}}>Properties</h4>
                    </Link>
                </Col>
                <Col>
                    <Link className="link-route" to="/customer">
                        <h4 style={{color: "orange"}}>My Favorites</h4>
                    </Link>
                </Col>
                <Col>
                    <Link className="link-route" to="/my-applications">
                        <h4 style={{color: "grey"}}>My Applications</h4>
                    </Link>
                </Col>
                <Col>
                    <Link className="link-route" to="/my-applications">
                        <h4 style={{color: "grey"}}>Offer History</h4>
                    </Link>
                </Col>

            </Row>
    )
}

export default CustomerHeader;