import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const OverView = () => {
  return (
    <Container className="my-5">
      <Row className="p-3 rounded-3 shadow text-center ">
        <Col>
          <h1 className="text-primary">5</h1>
          <p className="text-muted">USERS</p>
        </Col>
        <Col>
          <h1 className=" text-primary">5</h1>
          <p className="text-muted">USERS</p>
        </Col>
        <Col>
          <h1 className="text-primary">5</h1>
          <p className="text-muted">USERS</p>
        </Col>
      </Row>
    </Container>
  );
};

export default OverView;
