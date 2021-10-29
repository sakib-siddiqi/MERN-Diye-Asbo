import React from "react";
import { Container, Row } from "react-bootstrap";
import SignleService from "../Home/SignleService";
import { IoGrid } from "react-icons/io5";
const Services = () => {
  return (
    <Container>
      <div className="h2 text-center text-dark center">
        <IoGrid className="me-2" /> All Services
      </div>
      <Row xs={1} md={2} lg={3} className="g-4">
        <SignleService />
        <SignleService />
        <SignleService />
        <SignleService />
        <SignleService />
        <SignleService />
        <SignleService />
        <SignleService />
        <SignleService />
        <SignleService />
        <SignleService />
        <SignleService />
      </Row>
    </Container>
  );
};

export default Services;
