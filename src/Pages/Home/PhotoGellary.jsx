import React from "react";
import { Col, Row } from "react-bootstrap";
import gellary from "./gellary";

const PhotoGellary = () => {
  return (
    <Row xs={1} md={3} lg={4} className="g-4">
      {gellary.map((photo) => (
        <Col>
          <img src={photo} alt="photoGellary" className="w-100 gellary-photo" />
        </Col>
      ))}
    </Row>
  );
};

export default PhotoGellary;
