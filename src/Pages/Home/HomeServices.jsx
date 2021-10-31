import axios from "axios";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SignleService from "./SignleService";

const HomeServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("https://safe-reef-55674.herokuapp.com//services")
      .then((res) => setServices(res.data));
  }, []);
  console.log(services);
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {services.map((service) => (
        <SignleService serviceData={service} key={service._id} />
      ))}
    </Row>
  );
};

export default HomeServices;
