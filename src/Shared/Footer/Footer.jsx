import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiCopyright, BiMailSend } from "react-icons/bi";
import { FcCallback } from "react-icons/fc";
const Footer = () => {
  return (
    <Container className="pt-5">
      <Row xs={1} md={2} lg={3} className="g-3 mb-3">
        <Col>
          <img src="./logo.png" className="img-fluid mb-3" alt="" />
          <h4 className="text-dark fw-bold">DIYE ASBO</h4>
        </Col>
        <Col>
          <h4 className="text-dark fw-bold">About</h4>
          <p className="text-muted">
            We are giving you trustest service. Your Products , Our Safety
          </p>
        </Col>
        <Col>
          <h4 className="text-dark fw-bold">CONTUCT</h4>
          <a
            href="tel:01711112222"
            className="d-block text-decoration-none text-muted"
          >
            <FcCallback /> 01711112222
          </a>
          <a
            href="mailto:sakib@gmail.com"
            className="text-decoration-none text-muted"
          >
            <BiMailSend /> sakib@gmail.com
          </a>
        </Col>
      </Row>
      <p className="text-center d-block  text-dark fw-bold mb-4">
        <BiCopyright /> By Sakib Siddiqi
      </p>
    </Container>
  );
};

export default Footer;
