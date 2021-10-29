import React from "react";
import { Card, Col } from "react-bootstrap";

const SignleService = () => {
  return (
    <Col>
      <Card className="border-0 shadow-sm">
        <Card.Body className="p-2 rounded-3">
          <img
            src="./images/g_1.jpg"
            alt="services"
            className="mb-3 service-img rounded-2 w-100"
          />
          <h4 className="text-dark fw-bold ls-2">Service Title</h4>
          <p className="text-muted text-start ls-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            nulla tempore iste, magni laudantium dicta atque vitae cum totam
            placeat labore fugiat unde adipisci dolorem quisquam, reprehenderit
            exercitationem ad earum.
          </p>
          <button className="my-btn py-2 px-3 rounded-3 ls-2 mb-3">
            TAKE IT
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SignleService;
