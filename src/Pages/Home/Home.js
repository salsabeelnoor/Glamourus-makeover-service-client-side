import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import Appointment from "./Others/Appointment";
import Gallary from "./Others/Gallary";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Gallary></Gallary>
      <Appointment></Appointment>
    </div>
  );
};

export default Home;
