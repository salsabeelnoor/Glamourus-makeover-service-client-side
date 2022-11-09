import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import Review from "./Review";

const ReviewSection = () => {
  const { _id, serviceName } = useLoaderData();
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  //fetch reviews
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?serviceNo=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, [_id]);

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;

    const serviceReview = {
      serviceNo: _id,
      serviceName: serviceName,
      userId: user.uid,
      userName: user.displayName,
      userImage: user.photoURL,
      userReview: review,
    };
    console.log(serviceReview);
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Thank You");
          form.reset();
        }
      })
      .catch((error) => {
        toast.error("Opps something went wrong");
        console.error(error);
      });
  };

  return (
    <div>
      <div>
        {user?.uid ? (
          <>
            <div className="mx-auto container px-3 lg:px-0">
              <h2 className="lg:text-5xl text-3xl font-medium text-pink-900 pb-9 uppercase">
                Write A Review{" "}
              </h2>
              <form onSubmit={handleAddReview}>
                <textarea
                  name="review"
                  className="textarea textarea-bordered w-full h-40 mb-10"
                  placeholder=""
                  required
                ></textarea>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="btn mb-10 w-28 bg-pink-700 border-2 border-pink-800 text-white hover:text-white hover:bg-pink-900 hover:border-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center">
              <Link
                to="/login"
                className="btn my-3 w-1/4 bg-pink-700 border-2 border-pink-800 text-white hover:text-white hover:bg-pink-900 hover:border-2"
              >
                Please login to add a review
              </Link>
            </div>
          </>
        )}
      </div>
      <div className="mx-auto container px-3">
        <h2 className="lg:text-5xl text-2xl font-medium text-pink-900 pb-9 uppercase">
          What Others Say
        </h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 lg:gap-0 justify-items-center mb-20">
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
