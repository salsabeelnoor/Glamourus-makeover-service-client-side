import React from "react";
import toast, { Toaster } from "react-hot-toast";
import PageTitle from "../Shared/Header/PageTitle/PageTitle";

const AddService = () => {
  const handleServiceAdd = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.serviceName.value;
    const servicePrice = form.servicePrice.value;
    const serviceURL = form.serviceURL.value;
    const serviceDetails = form.serviceDetails.value;
    // console.log(serviceName, servicePrice, serviceURL, serviceDetails);

    const services = {
      serviceName: serviceName,
      servicePrice: servicePrice,
      serviceURL: serviceURL,
      serviceDetails: serviceDetails,
    };

    fetch("https://bridal-makeover-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Service Added Successfully!");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mx-auto py-10">
      <PageTitle title={"Add Service"}></PageTitle>
      <h2 className="lg:text-5xl text-pink-900 font-bold lg:text-start text-center text-4xl">
        Add A Service
      </h2>
      <div className="my-10 mx-5">
        <form onSubmit={handleServiceAdd}>
          <div className="flex lg:flex-row flex-col lg:justify-between">
            <div className="mb-6 lg:w-1/2 w-full pr-3">
              <label
                for="name"
                className="block text-xl mb-2 font-medium text-gray-900"
              >
                Service Name
              </label>
              <input
                type="text"
                name="serviceName"
                id="name"
                className=" border-2 border-pink-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-pink-900 focus:ring-1 focus:ring-pink-900"
                placeholder="Service Name"
                required
              />
            </div>
            <div className="mb-6 lg:w-1/2 w-full lg:pl-3">
              <label
                for="price"
                className="block text-xl mb-2 font-medium text-gray-900"
              >
                Price
              </label>
              <input
                type="number"
                name="servicePrice"
                id="price"
                className=" border-2 border-pink-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-pink-900 focus:ring-1 focus:ring-pink-900"
                placeholder="Service Price"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              for="url"
              className="block text-xl mb-2 font-medium text-gray-900"
            >
              Image URL
            </label>
            <input
              type="text"
              id="url"
              name="serviceURL"
              className=" border-2 border-pink-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-pink-900 focus:ring-1 focus:ring-pink-900"
              placeholder="Service Price"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="details"
              className="block text-xl mb-2 font-medium text-gray-900"
            >
              Service Details
            </label>
            <textarea
              id="details"
              name="serviceDetails"
              required
              className="border-2 h-24 border-pink-900 rounded-lg block w-full p-3  focus:outline-none focus:border-pink-900 focus:ring-1 focus:ring-pink-900"
              placeholder="Service description"
            ></textarea>
          </div>
          <button
            type="submit"
            className=" btn w-full lg:w-[100px] bg-pink-700 border-2 border-pink-800 text-white hover:text-white hover:bg-pink-900 hover:border-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
