import axios from "axios";
import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AiOutlineDollarCircle } from "react-icons/ai";
const AddService = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.status = [];
    axios
      .post("https://safe-reef-55674.herokuapp.com/services", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.code));
    reset();
  };
  return (
    <Row className="justify-content-center">
      <Col xs={12} md={6} lg={5}>
        <Card>
          <Card.Body>
            <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="s-title" className="form-label">
                  <p className="mb-1 text-dark fw-normal ls1">Title</p>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="s-title"
                  placeholder="Service Title"
                  {...register("s_title", { required: true })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="s-title" className="form-label">
                  <p className="text-dark fw-normal ls1">Description</p>
                </label>
                <textarea
                  type="text"
                  rows={4}
                  className="form-control"
                  placeholder="Service Description"
                  {...register("s_description", { required: true })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="per-km" className="form-label">
                  Per Kilometer
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <AiOutlineDollarCircle />
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    id="per-km"
                    placeholder="$/km"
                    min={1}
                    {...register("per_km", { required: true })}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="s-img" className="form-label">
                  <p className="mb-1 text-dark fw-normal ls1">Image</p>
                </label>
                <input
                  type="link"
                  className="form-control"
                  id="s-img"
                  placeholder="Service Image"
                  {...register("s_image", { required: true })}
                />
              </div>
              {(errors.s_title || errors.s_description || errors.per_houre) && (
                <p className="text-danger">This field is required</p>
              )}
              <button type="submit" className="btn btn-dark">
                Add Service
              </button>
            </form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default AddService;
