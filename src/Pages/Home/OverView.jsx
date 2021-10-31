import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const OverView = () => {
  return (
    <div className="my-5 bg-primary w-100 mx-0 rounded-3 shadow-lg">
      <Row xs={12} md={2} className="g-4">
        <Col className=" text-light p-4">
          <Container>
            <h3 className=" fw-bold ls1">YOUR FRIEND</h3>
            <h1 className=" fw-bolder text-dark ls1">DIYE ASBO</h1>
            <p className="text-light">
              we are providing you the best service with low cost.. we wanna be
              your friend.. will you?
            </p>
            <p className="text-light">Take our service for lowcost</p>
          </Container>
        </Col>
        <Col>
          <img
            src="https://i.ibb.co/SPZm9fJ/overview.jpg"
            alt="overview"
            className="w-100 rounded-3 shadow-sm"
          />
        </Col>
      </Row>
    </div>
  );
};

export default OverView;
