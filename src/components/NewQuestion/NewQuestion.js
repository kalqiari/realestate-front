import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function NewQuestion() {
  const [question, setQuestion] = useState("");
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;

    const dataForm = {
      question: form["question"].value,
    };

    setQuestion(dataForm);
    e.target.reset(question);
  };
  console.log(question);

  return (
    <Container>
      <Row>
        <Col md={{ offset: 3, span: 5 }}>
          <h2 style={{ color: "red" }} className="text-center">
            Need More Info?
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
                    <b>Question</b>
                  </Form.Label>
                  <Form.Control
                    name={"question"}
                    as="textarea"
                    rows={5}
                    placeholder="Type your query..."
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

export default NewQuestion;
