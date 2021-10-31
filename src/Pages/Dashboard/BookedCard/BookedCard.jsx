import React from "react";
import { ButtonGroup, Button, Card, Col } from "react-bootstrap";

const BookedCard = ({ serviceData }) => {
  return (
    <Col>
      <Card>
        <Card.Body>
          <h4>{serviceData.s_title}</h4>
          <span className="font-monospace mb-4 d-inline-block">
            {serviceData.address.email}
          </span>
          <span className="nav-item py-2 px-3 rounded-2 shadow-sm d-inline-block mb-3">
            {serviceData.status}
          </span>
          <p>
            <div>
              <span className="badge bg-secondary p-2 rounded-1">
                {serviceData.address.from}
              </span>{" "}
              to{" "}
              <span className="badge bg-primary p-2 rounded-1">
                {serviceData.address.to}
              </span>
            </div>
          </p>
          <ButtonGroup>
            <Button variant="primary">Aprove</Button>
            <Button variant="danger">Cancle</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BookedCard;
