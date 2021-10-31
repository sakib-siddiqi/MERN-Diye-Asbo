import axios from "axios";
import React, { useEffect, useState } from "react";
import { ButtonGroup, Button, Card, Col } from "react-bootstrap";
import Loader from "../../../Shared/Loader";
import { MdCancel } from "react-icons/md";
import useAuth from "../../../Hooks/useAuth";
const BookedCard = ({ serviceData }) => {
  const [conFirm, setConFirm] = useState();
  const [conFirmText, setConFirmText] = useState();
  const [bookedService, setBookedService] = useState({});
  useEffect(() => {
    axios
      .get(`https://safe-reef-55674.herokuapp.com/bookings/${serviceData._id}`)
      .then((res) => setBookedService(res.data))
      .catch((err) => console.log(err));
  }, []);

  /**
   * Handle Approve
   */
  const handleApprove = () => {
    axios
      .put("https://safe-reef-55674.herokuapp.com/bookings", {
        id: serviceData._id,
      })
      .then((res) => {
        console.log(res.data.acknowledged);
        if (res.data.acknowledged) {
          axios
            .get(
              `https://safe-reef-55674.herokuapp.com/bookings/${serviceData._id}`
            )
            .then((res) => {
              setBookedService(res.data);
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log("erro", err.code));
  };
  /**
   * Handle Cancle
   *
   */
  const handleCancle = () => {
    axios
      .delete(
        `https://safe-reef-55674.herokuapp.com/bookings/${serviceData._id}`
      )
      .then((res) => {
        console.log(res.data.acknowledged);
        if (res.data.acknowledged) {
          setBookedService({});
        }
      })
      .catch((err) => console.log("erro", err.code));
  };
  /**
   *
   *
   *
   *
   *
   */
  return (
    <>
      {bookedService.s_title ? (
        <Col>
          <Card>
            <Card.Body>
              <h4>{bookedService.s_title}</h4>
              <span className="font-monospace mb-4 d-inline-block">
                {bookedService.address.email}
              </span>
              <span className="nav-item py-2 px-3 rounded-2 shadow-sm d-inline-block mb-3">
                {bookedService.status}
              </span>
              <div className="mb-3">
                <div>
                  <span className="badge bg-secondary p-2 rounded-1">
                    {bookedService.address.from}
                  </span>{" "}
                  to{" "}
                  <span className="badge bg-primary p-2 rounded-1">
                    {bookedService.address.to}
                  </span>
                </div>
              </div>
              {conFirm && (
                <div className="mb-3">
                  <label htmlFor="confirm" className="form-label">
                    Type <b>CONFIRM</b>
                  </label>
                  <div className="input-group">
                    <input
                      onBlur={(e) => setConFirmText(e.target.value)}
                      id="confirm"
                      className="form-control text-danger fw-bolder ls2"
                    />{" "}
                    <button
                      className="input-group-text btn btn-primary text-light center"
                      onClick={() => setConFirm(false)}
                    >
                      <MdCancel />
                    </button>
                  </div>
                </div>
              )}
              <ButtonGroup>
                <Button variant="primary" onClick={handleApprove}>
                  Aprove
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    if (conFirmText === "CONFIRM") {
                      setConFirm(false);
                      handleCancle();
                    } else {
                      setConFirm(true);
                    }
                  }}
                >
                  Cancle
                </Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
      ) : (
        bookedService.s_title && <Loader />
      )}
    </>
  );
};

export default BookedCard;
