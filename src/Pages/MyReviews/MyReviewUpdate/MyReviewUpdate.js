import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const MyReviewUpdate = () => {
  const { _id } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = {
      userReview: form.review.value,
    };
    console.log("This is Updated Review", review);

    fetch(`http://localhost:5000/reviewUpdate/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Thank You");
          form.reset();
        }
      })
      .catch((error) => toast.error("Opps!! Something Went Wrong"));
  };

  return (
    <div className="mx-auto container min-h-screen flex flex-col">
      <h2 className="lg:text-6xl text-4xl lg:text-start text-center my-20 font-medium">
        Update Your review
      </h2>
      <form className="px-3" onSubmit={handleUpdate}>
        <textarea
          name="review"
          className="textarea textarea-bordered w-full h-48 mb-10 "
          placeholder="Write your Review"
          required
        ></textarea>
        <button
          type="submit"
          className="btn mb-10 w-28 bg-pink-700 border-2 border-pink-800 text-white hover:text-white hover:bg-pink-900 hover:border-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyReviewUpdate;
