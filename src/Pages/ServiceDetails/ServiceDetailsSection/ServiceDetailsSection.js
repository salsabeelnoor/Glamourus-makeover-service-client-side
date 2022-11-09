import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";

const ServiceDetailsSection = () => {
  const services = useLoaderData();
  return (
    <div className="grid lg:grid-cols-layout gap-9 grid-cols-mobile_layout mx-auto container lg:px-0 px-3 py-16">
      <div className="cursor-pointer">
        <PhotoProvider>
          <PhotoView src={services.serviceURL}>
            <img className="w-full h-auto" src={services.serviceURL} alt="" />
          </PhotoView>
        </PhotoProvider>
      </div>
      <div className="border-2 lg:mx-5 bg-[#f7e9f3] shadow-lg rounded-2xl">
        <div className="flex flex-col justify-start py-10 px-5">
          <h2 className="lg:text-6xl text-3xl font-pacific text-pink-900 pb-7">
            {services.serviceName}
          </h2>
          <h2 className="pb-7">
            <span className="text-gray-700 text-2xl font-bold ">Price:</span>{" "}
            <span className="text-gray-500 text-2xl font-bold">
              {services.servicePrice} BDT
            </span>
          </h2>
          <h2 className="text-[17px] italic text-gray-600">
            {services.serviceDetails}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsSection;
