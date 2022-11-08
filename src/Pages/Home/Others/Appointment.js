import React from "react";

const Appointment = () => {
  return (
    <div className="bg-[#9e005d] mt-24 py-12">
      <div className="flex lg:flex-row lg:justify-between flex-col items-center mx-auto container px-5 lg:px-0">
        <div className=" text-gray-200  text-center lg:text-start">
          <h2 className="font-script lg:text-5xl text-3xl">
            Book your visit online and save up to -30%
          </h2>
          <p className="pt-5 lg:text-3xl text-xl">
            First 100 booking will be awarded with free manicure
          </p>
        </div>
        <div className="mt-4">
          <button className="btn lg:px-12 px-10 lg:text-3xl text-xl h-auto lg:py-5 py-3 text-center font-medium  bg-gray-100 border-2 border-gray-100 text-gray-900 hover:text-gray-800 hover:bg-gray-200 hover:border-2">
            Book An Apppointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
