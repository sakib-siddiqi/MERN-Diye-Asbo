import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import AddService from "./AddService/AddService";
import UserProfile from "./UserProfile/UserProfile";

const DashBoard = () => {
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
          <p>ksjasdfasdfdfkl</p>
        </Tab>
        <Tab eventKey="all-bookings" title="All Bookings">
          <p>asdfkljklsdfjlkjsadf</p>
        </Tab>
        <Tab eventKey="add-service" title="Add New Service">
          <AddService />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default DashBoard;
