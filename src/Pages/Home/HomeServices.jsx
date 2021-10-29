import React from "react";
import { Row } from "react-bootstrap";
import SignleService from "./SignleService";

const HomeServices = () => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      <SignleService />
      <SignleService />
      <SignleService />
      <SignleService />
      <SignleService />
      <SignleService />
    </Row>
  );
};

export default HomeServices;
