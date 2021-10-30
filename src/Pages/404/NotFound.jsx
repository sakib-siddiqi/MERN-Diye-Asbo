import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6} className="center flex-column">
          <img
            src="./images/notFound.png"
            alt="notfound png"
            className="img-fluid mb-4"
          />
          <Nav.Item>
            <Nav.Link
              as={NavLink}
              exact
              to="/"
              className="my-btn py-2 px-4 ls-2 rounded-pill"
            >
              Back to Home
            </Nav.Link>
          </Nav.Item>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
