import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="center" style={{ height: "100vh" }}>
      <Spinner animation="grow" variant="dark" />
    </div>
  );
};

export default Loader;
