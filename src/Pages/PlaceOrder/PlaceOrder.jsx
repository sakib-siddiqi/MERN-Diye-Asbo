import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import useData from "../../Hooks/useData";

const PlaceOrder = () => {
  const [Alart, setAlart] = useState("");
  const { service_route } = useParams();
  const { services } = useData();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const prasentService = services.find(
    (service) =>
      service.s_title.toLowerCase().split(" ").join("-") === service_route
  );

  const onSubmit = (data) => {
    // customize data
    delete prasentService._id;
    prasentService.status = "panding";
    const finalData = { ...prasentService, address: data };

    // get bookings products
    axios.get("https://safe-reef-55674.herokuapp.com/bookings").then((res) => {
      const inDB = res.data.find(
        (book) =>
          book.s_title === finalData.s_title &&
          book.address.email === finalData.address.email
      );
      console.log(inDB);
      if (inDB) {
        setAlart("Already Booked 💥");
      } else {
        axios
          .post("https://safe-reef-55674.herokuapp.com/bookings", finalData)
          .then((res) => {
            console.log(res.data);
            setAlart("DONE ✅");
          })
          .catch((err) => console.log(err.code));
      }
    });
    // post request to booking
  };

  return (
    <Container>
      <Row xs={1} md={2} className="g-4 my-5">
        <Col>
          <img
            src={prasentService.s_image}
            alt="services"
            className="mb-3 service-img rounded-2 w-100"
          />
          <h4 className="text-dark fw-bold ls-2">{prasentService.s_title}</h4>
          <h4 className="text-dark fw-bold ls-2 d-inline-block py-2 px-3 rounded-3 shadow-sm">
            {prasentService.per_km} $/km
          </h4>
          <p className="text-muted text-start ls-1">
            {prasentService.s_description}
          </p>
        </Col>
        <Col>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              value={user.email}
              readOnly
              className="form-control mb-4 p-2"
              {...register("email", { required: true })}
            />
            <input
              type="text"
              placeholder="From"
              className="form-control mb-4 p-2"
              {...register("from", { required: true })}
            />
            <input
              type="text"
              placeholder="To"
              className="form-control mb-4 p-2"
              {...register("to", { required: true })}
            />
            <p>{Alart}</p>
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            <button className="btn btn-primary" type="submit">
              Place Booking
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default PlaceOrder;
