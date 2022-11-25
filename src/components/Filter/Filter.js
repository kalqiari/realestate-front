import React, {useEffect, useState} from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
// import "./Filter.css";
import { useSearchParams } from "react-router-dom";
import { Fragment, useRef } from "react";
import { useNavigate } from "react-router";

const Filter = (props) => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [filterData, setFilterData] = useState({});
  const navigate = useNavigate();
  const form = useRef();
  const submitHandler = (e) => {
    e.preventDefault();

    if (form.current["filter"].value) {
      const params = searchParams;
      params.set("filter", form.current["filter"].value);
      params.set("input", form.current["input"].value);
      setSearchParams(params);
      console.log(params);
    }
    else navigate("/");



  };


  const space = <Fragment>&nbsp;&nbsp;</Fragment>;

  return (
    <Container>
      <Row className="mb-5">
        <Col md={{ offset: 3, span: 9 }}>
          <Form ref={form} className="" onSubmit={submitHandler}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Filter:</Form.Label>
                  <Form.Select name={"filter"}>
                    <option value="default"></option>
                    <option value="price">Price &lt;</option>
                    <option value="state">State</option>
                    <option value="city">City</option>
                    <option value="zipcode">Zipcode</option>
                    <option value="numberOfRooms">Number of Rooms</option>
                    <option value="homeType">Home Type</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Input:</Form.Label>
                  <Form.Control
                    required={true}
                    name={"input"}
                    type="text"
                    placeholder="Search.."
                  />
                </Form.Group>
              </Col>
              <Col>
                <div>{space}</div>

                <Button className="mt-2" type="submit">
                  Apply Filter
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Filter;
