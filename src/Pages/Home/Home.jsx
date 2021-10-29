import React from "react";
import { Container } from "react-bootstrap";
import OverView from "./OverView";
import PhotoGellary from "./PhotoGellary";
import Services from "./Services";

const Home = () => {
  return (
    <Container>
      <div id="header" className="center flex-column">
        <h5 className="text-dark fw-bold ls2">DIYE ASBO</h5>
        <h1 className="fw-bold text-primary ls2 display-1 text-center">
          GET FROM HOME
        </h1>
        <button className="my-btn rounded-pill py-3 px-5">Have A Look</button>
      </div>
      <OverView />
      <div id="photoGellary" className="my-5">
        <h3 className="text-dark text-center fw-bold mb-4">SERVICES</h3>
        <Services />
      </div>
      <div id="photoGellary" className="my-5">
        <h3 className="text-dark text-center fw-bold mb-4">GELLARY</h3>
        <PhotoGellary />
      </div>
    </Container>
  );
};

export default Home;
