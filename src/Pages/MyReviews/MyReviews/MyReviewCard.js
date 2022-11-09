import React from "react";
import { FaTrashAlt, FaUser, FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyReviewCard = ({ myReview, handleDelete }) => {
  console.log("this is from review card", myReview);
  return (
    <div>
      <div className="card lg:w-96 w-auto h-96 bg-pink-100 shadow-xl">
        <div className="flex justify-end">
          <div className="flex justify-between pt-5 pr-5  ">
            <Link
              to={`/reviewUpdate/${myReview._id}`}
              className="tooltip"
              data-tip="Edit"
            >
              <FaUserEdit className="mr-5 cursor-pointer w-5 h-4 "></FaUserEdit>
            </Link>
            <Link className="tooltip" data-tip="Delete">
              <FaTrashAlt
                onClick={() => handleDelete(myReview._id)}
                className="cursor-pointer w-5 h-4"
              ></FaTrashAlt>
            </Link>
          </div>
        </div>
        <div className="avatar flex justify-center pt-10 ">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            {myReview?.userImage === null ? (
              <FaUser className="w-full h-full"></FaUser>
            ) : (
              <img src={myReview?.userImage} alt="" />
            )}
          </div>
        </div>
        <div className="flex justify-center text-center card-body">
          <h2 className="text-center text-gray-500 font-bold capitalize text-lg py-0">
            {myReview?.serviceName}
          </h2>
          <p className="px-3 py-0">{myReview?.userReview}</p>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
