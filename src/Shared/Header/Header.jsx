import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} style={{ color: "none" }} to="/">
          <img src="/logo.png" alt="DA" style={{ maxWidth: "35px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-center" as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-center" as={NavLink} to="/my-orders">
              My Orders
            </Nav.Link>
            <Nav.Link className="text-center" as={NavLink} to="/all-orders">
              All Orders
            </Nav.Link>
            <Nav.Link className="text-center" as={NavLink} to="/add-service">
              Add New
            </Nav.Link>
          </Nav>
          <button className="my-btn px-3 rounded-pill py-2">Login</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
