import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import BookedCard from "../Dashboard/BookedCard/BookedCard";

const AllBookings = () => {
  const [allBookings, setAllBookings] = useState([]);
  useEffect(() => {
    axios
      .get("https://safe-reef-55674.herokuapp.com/bookings")
      .then((res) => setAllBookings(res.data))
      .catch((err) => console.log(err.code));
  }, []);
  return (
    <Container className="my-5">
      {allBookings.length ? (
        <Row xs={12} md={6} lg={4} className="g-4 my-5">
          {allBookings.map((service) => (
            <BookedCard
              serviceData={service}
              key={`${service.s_title}-for-${service.address.email}`}
            />
          ))}
        </Row>
      ) : (
        <h1 className="fw-bold text-center text-muted">No Order Yet...</h1>
      )}
    </Container>
  );
};

export default AllBookings;
