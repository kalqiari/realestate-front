import { Button, Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function Users() {
  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <h2 className="text-center">USERS</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Role</th>
                <th>Activate/Deactivate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Customer</td>
                <td>
                  <Button className="px-3 mx-2" variant="outline-success">
                    Activate
                  </Button>
                  <Button variant="outline-danger">De-activate</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Users;
