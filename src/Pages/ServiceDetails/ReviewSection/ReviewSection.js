import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const ReviewSection = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {user?.uid ? (
        <>
          <div className="mx-auto container px-3 lg:px-0">
            <h2 className="lg:text-5xl text-3xl font-medium text-pink-900 pb-9 uppercase">
              Write A Review{" "}
            </h2>
            <form>
              <textarea
                className="textarea textarea-bordered w-full h-40 mb-10"
                placeholder=""
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
  );
};

export default ReviewSection;
