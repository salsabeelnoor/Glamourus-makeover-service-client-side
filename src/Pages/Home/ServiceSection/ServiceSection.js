import React, { useEffect, useState } from "react";
import ServiceCard from "../../Shared/ServiceCard/ServiceCard";

const ServiceSection = () => {
  const [services, setServices] = useState([]);

  //fetch services
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container mx-auto my-16">
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
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-0">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
