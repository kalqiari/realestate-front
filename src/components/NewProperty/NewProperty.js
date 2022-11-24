import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function NewProperty() {
  const [newPropertyData, setNewPropertyData] = useState({});
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;

    const dataForm = {
      streetAddress: form["streetAddress"].value,
      address2: form["address2"].value,
      city: form["city"].value,
      state: form["state"].value,
      zipcode: form["zipcode"].value,
      propertyStatus: form["propertyStatus"].value,
      listingType: form["listingType"].value,

      description: form["description"].value,
      price: form["price"].value,
      homeType: form["homeType"].value,
      sqft: form["sqft"].value,
      bedrooms: form["bedrooms"].value,
      pool: form["pool"].value,
      parkingType: form["parkingType"].value,

      parkingSpaces: form["parkingSpaces"].value,
      flooringType: form["flooringType"].value,
      yearBuilt: form["yearBuilt"].value,
      purchaseComplete: form["purchaseComplete"].value,
      photo: form["photo"].value,
    };

    setNewPropertyData(dataForm);
    e.target.reset();
  };
  console.log(newPropertyData);

  return (
    <Container>
      <Row>
        <Col md={{ offset: 3, span: 5 }}>
          <h2 style={{ color: "red" }} className="text-center">
            Add A New Property
          </h2>
        </Col>
      </Row>
      <Row className="my-5">
        <Col md={{ offset: 3, span: 6 }}>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b>Street Address</b>
                  </Form.Label>
                  <Form.Control
                    required={true}
                    name={"streetAddress"}
                    type="text"
                    placeholder="Street Address"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b>Address 2</b>
                  </Form.Label>
                  <Form.Control
                    name={"address2"}
                    type="text"
                    placeholder="Address 2"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b>City</b>
                  </Form.Label>
                  <Form.Control
                    required={true}
                    name={"city"}
                    type="text"
                    placeholder="City"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b>State</b>
                  </Form.Label>
                  <Form.Control
                    required={true}
                    name={"state"}
                    type="text"
                    placeholder="State"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b>Zipcode</b>
                  </Form.Label>
                  <Form.Control
                    required={true}
                    name={"zipcode"}
                    type="number"
                    placeholder="Zipcode"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    <b>Property Status</b>
                  </Form.Label>
                  <Form.Select
                    name={"propertyStatus"}
                    aria-label="Default select example"
                  >
                    <option value="SOLD">SOLID</option>
                    <option value="RENTED">RENTED</option>
                    <option value="PENDING">PENDING</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    <b>Listing Type</b>
                  </Form.Label>
                  <Form.Select
                    name={"listingType"}
                    aria-label="Default select example"
                  >
                    <option value="SALE">SALE</option>
                    <option value="RENT">RENT</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b>Description</b>
                  </Form.Label>
                  <Form.Control
                    required={true}
                    name={"description"}
                    as="textarea"
                    rows={4}
                    placeholder="Description"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b>Price</b>
                  </Form.Label>
                  <Form.Control
                    required={true}
                    name={"price"}
                    type="number"
                    placeholder="Price"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b>Home Type</b>
                  </Form.Label>
                  <Form.Control
                    required={true}
                    name={"homeType"}
                    type="text"
                    placeholder="Home Type"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b>sqFt</b>
                  </Form.Label>
                  <Form.Control
                    required={true}
                    name={"sqft"}
                    type="text"
                    placeholder="Square Foot"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b>Bedrooms</b>
                  </Form.Label>
                  <Form.Control
                    required={true}
                    name={"bedrooms"}
                    type="number"
                    placeholder="Bedrooms"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b>Pool</b>
                  </Form.Label>
                  <Form.Select
                    name={"pool"}
                    aria-label="Default select example"
                  >
                    <option value="TRUE">Yes</option>
                    <option value="FALSE">No</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    <b>Parking Type</b>
                  </Form.Label>
                  <Form.Select
                    name={"parkingType"}
                    aria-label="Default select example"
                  >
                    <option value="SALE">Open</option>
                    <option value="RENT">Close</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b>Parking Space</b>
                  </Form.Label>
                  <Form.Control
                    required={true}
                    name={"parkingSpaces"}
                    type="number"
                    placeholder="Parking Space"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    <b>Flooring Type</b>
                  </Form.Label>
                  <Form.Select
                    name={"flooringType"}
                    aria-label="Default select example"
                  >
                    <option value="CARPET">Carpet</option>
                    <option value="WOODENFLOOR">Woodent Flooring</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b>Year Built</b>
                  </Form.Label>
                  <Form.Control
                    required={true}
                    name={"yearBuilt"}
                    type="number"
                    placeholder="Year Built"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b>Is Purchase Complete?</b>
                  </Form.Label>
                  <Form.Select
                    name={"purchaseComplete"}
                    aria-label="Default select example"
                  >
                    <option value="TRUE">Yes</option>
                    <option value="FALSE">No</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group controlId="formFileSm" className="mb-3">
                  <Form.Label>
                    <b>Upload property's image/s</b>
                  </Form.Label>
                  <Form.Control
                    required={true}
                    type="file"
                    size="sm"
                    name={"photo"}
                    multiple
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  style={{ width: "100%" }}
                  variant="success"
                  type="submit"
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default NewProperty;
