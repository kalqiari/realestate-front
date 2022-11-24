import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Properties from "../../Properties/Properties";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Owner() {
  return (
    <Container>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Properties">
          <Properties />
        </Tab>
        <Tab eventKey="profile" title="Applications">
          Applications
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Owner;

// function Owner() {
//   return (
//     <div>
//       <Row className="m-5">
//         <Col md={9}>
//           <h1 className="text-center" style={{ color: "chocolate" }}>
//             Your Properties
//           </h1>
//           <Properties />
//         </Col>
//         <Col md={3}>
//           <h1 className="text-center" style={{ color: "chocolate" }}>
//             Applications
//           </h1>
//           <h1>None...:)</h1>
//         </Col>
//       </Row>
//     </div>
//   );
// }
