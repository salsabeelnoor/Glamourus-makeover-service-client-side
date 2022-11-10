import React from "react";
import PageTitle from "../../Shared/Header/PageTitle/PageTitle";
import ReviewSection from "../ReviewSection/ReviewSection";
import ServiceDetailsSection from "../ServiceDetailsSection/ServiceDetailsSection";

const ServiceDetails = () => {
  return (
    <div>
      <ServiceDetailsSection></ServiceDetailsSection>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default ServiceDetails;
