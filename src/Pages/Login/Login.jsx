import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
const Login = () => {
  const { handleSignin } = useAuth();
  const location = useLocation();
  const history = useHistory();
  console.log(location);
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Card>
            <Card.Body className=" as-1 center flex-column">
              <img src="./logo.png" alt="diye asbo logo" className="mb-4" />
              <h3 className="text-primary text-dark fw-bolder mb-3">
                DIYE ASBO
              </h3>
              <Button
                variant="outline-dark"
                className="center rounded-pill"
                onClick={() =>
                  handleSignin(() => {
                    history.push(location.state?.from?.pathname || "/");
                  })
                }
              >
                <FcGoogle className="me-2" /> Google Signin
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
