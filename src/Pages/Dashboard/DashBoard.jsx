import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Tabs, Tab, Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import AddService from "./AddService/AddService";
import BookedCard from "./BookedCard/BookedCard";
import UserProfile from "./UserProfile/UserProfile";

const DashBoard = () => {
  const [allBookings, setAllBookings] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    axios
      .get("http://localhost:5000/bookings")
      .then((res) => setAllBookings(res.data))
      .catch((err) => console.log(err.code));
  }, []);
  const myBookings = allBookings.filter(
    (books) => books.address.email === user.email
  );
  return (
    <Container className="my-5">
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3 justify-content-center"
      >
        <Tab eventKey="profile" title="Profile">
          <UserProfile />
        </Tab>
        <Tab eventKey="my-bookings" title="My Bookings">
          {myBookings.length ? (
            <Row xs={12} md={6} lg={4} className="g-4">
              {myBookings.map((service) => (
                <BookedCard
                  serviceData={service}
                  key={`${service.s_title}-for-${service.address.email}`}
                />
              ))}
            </Row>
          ) : (
            <h1 className="fw-bold text-center text-muted">No Order Yet...</h1>
          )}
        </Tab>
        <Tab eventKey="add-service" title="Add New Service">
          <AddService />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default DashBoard;
