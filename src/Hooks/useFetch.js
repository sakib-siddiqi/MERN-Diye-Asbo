import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios
      .get("https://safe-reef-55674.herokuapp.com//services")
      .then((res) => setServices(res.data));
    axios
      .get("https://safe-reef-55674.herokuapp.com//bookings")
      .then((res) => setBookings(res.data));
  }, []);
  const reloadBooking = () => {
    axios
      .get("https://safe-reef-55674.herokuapp.com//bookings")
      .then((res) => setBookings(res.data));
  };
  return {
    services,
    bookings,
    reloadBooking,
  };
};
export default useFetch;
