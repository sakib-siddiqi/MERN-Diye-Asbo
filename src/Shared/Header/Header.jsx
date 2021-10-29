import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="sticky-top bg-glass">
      <Container>
        <Navbar.Brand as={Link} style={{ color: "none" }} to="/">
          <img src="/logo.png" alt="DA" style={{ maxWidth: "35px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-center" as={NavLink} exact to="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-center" as={NavLink} to="/services">
              Services
            </Nav.Link>
            <Nav.Link className="text-center" as={NavLink} to="/dashboard">
              Dashboard
            </Nav.Link>
            <Nav.Link
              className="my-btn px-3 rounded-pill py-2 text-center text-light m-0 center"
              as={NavLink}
              to="/login"
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
