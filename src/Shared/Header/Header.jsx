import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { GoSignOut } from "react-icons/go";
const Header = () => {
  const { user, handleSignOut } = useAuth();
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
            {user.uid ? (
              <>
                <Nav.Link className="text-center" as={NavLink} to="/dashboard">
                  Dashboard
                </Nav.Link>
                <Nav.Link className="center mx-2 p-1 ps-2 rounded-pill border-1 border-dark border">
                  {user.displayName}
                  <span
                    className="rounded-pill text-center m-0 center ms-2 my-btn p-2 text-light"
                    onClick={handleSignOut}
                  >
                    <GoSignOut />
                  </span>
                </Nav.Link>
              </>
            ) : (
              <Nav.Link
                className="my-btn px-3 rounded-pill py-2 text-center text-light m-0 center"
                as={NavLink}
                to="/login"
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
