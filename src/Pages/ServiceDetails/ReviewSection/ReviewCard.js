import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import AuthProvider, {
  AuthContext,
} from "../../../Contexts/AuthProvider/AuthProvider";

const ReviewCard = ({ review }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="">
      <div className="card lg:w-96 w-auto h-80 bg-pink-100 shadow-xl ">
        <div className="avatar flex justify-center pt-10">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            {review?.userImage === null ? (
              <FaUser className="w-full h-full"></FaUser>
            ) : (
              <img src={review?.userImage} alt="" />
            )}
          </div>
        </div>
        <div className="card-body flex justify-center text-center pt-5">
          <h2 className="text-center text-gray-800 font-bold capitalize text-xl">
            {review?.userName}
          </h2>
          <p>{review?.userReview}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
