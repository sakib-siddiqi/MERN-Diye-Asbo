import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/services")
      .then((res) => setServices(res.data));
    axios
      .get("http://localhost:5000/bookings")
      .then((res) => setBookings(res.data));
  }, []);
  const reloadBooking = () => {
    axios
      .get("http://localhost:5000/bookings")
      .then((res) => setBookings(res.data));
  };
  return {
    services,
    bookings,
    reloadBooking,
  };
};
export default useFetch;
