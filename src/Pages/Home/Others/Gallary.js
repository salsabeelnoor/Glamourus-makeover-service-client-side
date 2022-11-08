import React from "react";
import PhotoAlbum from "react-photo-album";
import img1 from "../../../assets/images/media/media1.jpg";
import img2 from "../../../assets/images/media/media2.jpg";
import img3 from "../../../assets/images/media/media3.jpg";
import img4 from "../../../assets/images/media/media4.jpg";
import img5 from "../../../assets/images/media/media5.jpg";
import { FaArrowRight } from "react-icons/fa";

const Gallary = () => {
  const photos = [
    {
      src: img1,
      width: 1000,
      height: 1600,
    },
    {
      src: img2,
      width: 1000,
      height: 900,
    },
    {
      src: img3,
      width: 1600,
      height: 900,
    },
    {
      src: img4,
      width: 800,
      height: 900,
    },
    {
      src: img5,
      width: 900,
      height: 1000,
    },
  ];
  return (
    <div className="bg-[#9e005d] mt-24 shadow-xl">
      <div className="container mx-auto">
        <div className="py-16 text-center">
          <h2 className="font-script text-5xl  text-gray-200">Our Brides</h2>
          <p className="text-lg pt-4 text-gray-200">
            Our brides are amazing – to put it simply! Every wedding and
            celebration is unique and has its personality, <br /> which is why
            at Kashee’s you will find a solution to all your bridal needs under
            one roof.
          </p>
        </div>
        <div className="mx-auto px-5 lg:px-0">
          <PhotoAlbum layout="rows" photos={photos}></PhotoAlbum>
        </div>
        <div className="flex lg:justify-end justify-center py-5 pb-10">
          <button className="btn px-9 font-medium  bg-transparent border-2 border-gray-100 text-gray-100 hover:text-gray-800 hover:bg-gray-200 hover:border-2">
            See More
            <FaArrowRight className="ml-3"></FaArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
