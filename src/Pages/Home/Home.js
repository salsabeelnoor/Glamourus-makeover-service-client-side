import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import Appointment from "./Others/Appointment";
import Gallary from "./Others/Gallary";
import ServiceSection from "./ServiceSection/ServiceSection";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Gallary></Gallary>
      <ServiceSection></ServiceSection>
      <Appointment></Appointment>
    </div>
  );
};

export default Home;
