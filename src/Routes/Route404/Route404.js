import React from "react";
import route_404 from "../../assets/images/notFound_image_thumbnail.png";
import PageTitle from "../../Pages/Shared/Header/PageTitle/PageTitle";

const Route404 = () => {
  return (
    <div className="flex justify-center pt-10">
      <PageTitle title={"404"}></PageTitle>
      <img src={route_404} alt="" />
    </div>
  );
};

export default Route404;
