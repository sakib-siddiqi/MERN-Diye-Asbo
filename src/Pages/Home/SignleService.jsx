import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SignleService = ({ serviceData }) => {
  const service_route = serviceData.s_title.toLowerCase().split(" ").join("-");
  return (
    <Col>
      <Card className="border-0 shadow-sm">
        <Card.Body className="p-2 rounded-3">
          <img
            src={serviceData.s_image}
            alt="services"
            className="mb-3 service-img rounded-2 w-100"
          />
          <h4 className="text-dark fw-bold ls-2">{serviceData.s_title}</h4>
          <p className="text-muted text-start ls-1">
            {serviceData.s_description}
          </p>
          <NavLink
            exact
            to={`/service/${service_route}`}
            className="my-btn py-2 px-3 rounded-3 ls-2 mb-3 nav-link d-inline-block"
          >
            BOOK NOW
          </NavLink>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SignleService;
