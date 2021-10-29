import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import UserProfile from "./UserProfile/UserProfile";

const DashBoard = () => {
  return (
    <Container className="my-5">
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3 justify-content-center"
      >
        <Tab.Palen eventKey="profile" title="Profile">
          <UserProfile />
        </Tab.Palen>
        <Tab.Palen eventKey="my-bookings" title="My Bookings">
          <p>ksjasdfasdfdfkl</p>
        </Tab.Palen>
        <Tab.Palen eventKey="all-bookings" title="All Bookings">
          <p>asdfkljklsdfjlkjsadf</p>
        </Tab.Palen>
        <Tab.Palen eventKey="add-service" title="Add New Service">
          <p>ksssssssssssssssssssssssjdfkl</p>
        </Tab.Palen>
      </Tabs>
    </Container>
  );
};

export default DashBoard;
