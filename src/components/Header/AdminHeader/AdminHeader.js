import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";

const AdminHeader = () => {
    return (

            <Row>
                <Col>
                    <Link className="link-route" to="/dashboard">
                        <h4 style={{color: "purple"}}>Dashboard</h4>
                    </Link>
                </Col>
                <Col>
                    <Link className="link-route" to="/users">
                        <h4 style={{color: "orange"}}>Users</h4>
                    </Link>
                </Col>
            </Row>
    )
}

export default AdminHeader;