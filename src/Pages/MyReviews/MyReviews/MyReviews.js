import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import PageTitle from "../../Shared/Header/PageTitle/PageTitle";
import MyReviewCard from "./MyReviewCard";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(
      `https://bridal-makeover-server.vercel.app/reviews?userId=${user?.uid}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data);
        console.log(myReviews);
      });
  }, [user?.uid, logOut, refresh]);

  const handleDelete = (id) => {
    console.log("this is id", id);
    fetch(`https://bridal-makeover-server.vercel.app/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Deleted Successfully");
        setRefresh(!refresh);
      })
      .catch((error) => toast.error("Something Went Wrong."));
  };
  return (
    <div className="mx-auto container py-16 min-h-[80vh]">
      <PageTitle title={"My Reviews"}></PageTitle>
      {myReviews.length === 0 ? (
        <>
          <h2 className="text-center flex items-center justify-center text-4xl font-bold text-gray-600">
            No Reviews To Show
          </h2>
        </>
      ) : (
        <>
          <h2 className="lg:text-start text-center text-4xl font-bold text-gray-600">
            We Really Appriciate Your Feedback
          </h2>
        </>
      )}

      <div className="grid lg:grid-cols-4 grid-cols-1 gap-3 lg:gap-14 justify-items-center my-20 mx-3 lg:mx-auto">
        {myReviews.map((myReview) => (
          <MyReviewCard
            key={myReview._id}
            myReview={myReview}
            handleDelete={handleDelete}
          ></MyReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
