import { Row } from "react-bootstrap";
import useData from "../../Hooks/useData";
import Loader from "../../Shared/Loader";
import SignleService from "./SignleService";

const HomeServices = () => {
  const { services } = useData();
  console.log(services);
  return (
    <>
      {!services.length ? (
        <Loader />
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {services.map((service) => (
            <SignleService
              serviceData={service}
              key={service._id + service.s_title}
            />
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeServices;
