import React, { useEffect, useState } from "react";
import PageTitle from "../Shared/Header/PageTitle/PageTitle";
import ServiceCard from "../Shared/ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [spinner, setSpinner] = useState(false);

  //fetch services
  useEffect(() => {
    setSpinner(true);
    fetch("https://bridal-makeover-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setSpinner(false);
      });
  }, []);
  return (
    <div className="mx-auto container py-16 min-h-screen">
      <PageTitle title={"Services"}></PageTitle>
      <div className="text-center">
        <h2 className="font-script text-5xl  text-pink-900">Our Services</h2>
        <p className="p-7 text-base text-gray-800">
          Explore the art of looking beautiful with the best in the industry.
          Glamourous makes
          <br /> a personal commitment to realize the prevalent gap in the
          industry by providing access to high-end salon services <br />
          at convenient times and affordable prices – any day of the week and
          any time of the day!
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 justify-items-center items-center gap-6 py-5 lg:px-0 px-3">
        {spinner ? (
          <div className="flex justify-center">
            <div className="radial-progress " style={{ "--value": 70 }}>
              70%
            </div>
          </div>
        ) : (
          services.map((service) => (
            <ServiceCard key={service._id} service={service}>
              {console.log(service)}
            </ServiceCard>
          ))
        )}
      </div>
    </div>
  );
};

export default Services;
