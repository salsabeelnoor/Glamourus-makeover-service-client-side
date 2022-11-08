import React from "react";

const AddService = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="lg:text-5xl text-pink-900 font-bold lg:text-start text-center text-4xl">
        Add A Service
      </h2>
      <div className="my-10 mx-5">
        <form>
          <div className="flex lg:flex-row flex-col lg:justify-between">
            <div class="mb-6 lg:w-1/2 w-full pr-3">
              <label
                for="name"
                class="block text-xl mb-2 font-medium text-gray-900"
              >
                Service Name
              </label>
              <input
                type="text"
                id="name"
                class=" border-2 border-pink-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-pink-900 focus:ring-1 focus:ring-pink-900"
                placeholder="Service Name"
                required
              />
            </div>
            <div class="mb-6 lg:w-1/2 w-full lg:pl-3">
              <label
                for="price"
                class="block text-xl mb-2 font-medium text-gray-900"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                class=" border-2 border-pink-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-pink-900 focus:ring-1 focus:ring-pink-900"
                placeholder="Service Price"
                required
              />
            </div>
          </div>
          <div class="mb-6">
            <label
              for="url"
              class="block text-xl mb-2 font-medium text-gray-900"
            >
              Image URL
            </label>
            <input
              type="text"
              id="url"
              class=" border-2 border-pink-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-pink-900 focus:ring-1 focus:ring-pink-900"
              placeholder="Service Price"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="details"
              class="block text-xl mb-2 font-medium text-gray-900"
            >
              Service Details
            </label>
            <textarea
              id="details"
              name="message"
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
