import React from "react";
import img1 from "../../../assets/images/banner/banner6.jpg";
import img2 from "../../../assets/images/banner/banner2.jpeg";
import img3 from "../../../assets/images/banner/banner3.jpeg";
import img4 from "../../../assets/images/banner/banner7.jpg";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="carousel-img">
          <img
            src={img1}
            className="w-screen object-cover object-center lg:max-h-[800px] min-h-[200px] "
            alt=""
          />
        </div>
        <div className="absolute flex flex-col justify-center transform -translate-y-1/2 left-1/3  top-1/3 w-1/3">
          <h1 className=" text-6xl italic font-pacific text-white text-center">
            {" "}
            Glamourus Makeover by Azmi
          </h1>
          <p className="text-white text-center text-lg py-10 italic">
            Glamourous makeover makes a personal commitment <br /> to realize
            the prevalent gap in the industry by providing access to high-end
            salon services at convenient times and affordable prices – any day
            of the week and <br /> any time of the day!
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="carousel-img">
          <img
            src={img2}
            className="w-screen object-cover object-center lg:max-h-[800px] min-h-[200px] "
            alt=""
          />
        </div>
        <div className="absolute flex flex-col justify-center transform -translate-y-1/2 left-1/3  top-1/3 w-1/3">
          <h1 className=" text-6xl italic font-pacific text-white text-center">
            {" "}
            Glamourus Makeover by Azmi
          </h1>
          <p className="text-white text-center text-lg py-10 italic">
            Glamourous makeover makes a personal commitment <br /> to realize
            the prevalent gap in the industry by providing access to high-end
            salon services at convenient times and affordable prices – any day
            of the week and <br /> any time of the day!
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="carousel-img">
          <img
            src={img3}
            className="w-screen object-cover object-center lg:max-h-[800px] min-h-[200px] "
            alt=""
          />
        </div>
        <div className="absolute flex flex-col justify-center transform -translate-y-1/2 left-1/3  top-1/3 w-1/3">
          <h1 className=" text-6xl italic font-pacific text-white text-center">
            {" "}
            Glamourus Makeover by Azmi
          </h1>
          <p className="text-white text-center text-lg py-10 italic">
            Glamourous makeover makes a personal commitment <br /> to realize
            the prevalent gap in the industry by providing access to high-end
            salon services at convenient times and affordable prices – any day
            of the week and <br /> any time of the day!
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="carousel-img">
          <img
            src={img4}
            className="w-screen object-cover object-center lg:max-h-[800px] min-h-[200px] "
            alt=""
          />
        </div>
        <div className="absolute flex flex-col justify-center transform -translate-y-1/2 left-1/3  top-1/3 w-1/3">
          <h1 className=" text-6xl italic font-pacific text-white text-center">
            {" "}
            Glamourus Makeover by Azmi
          </h1>
          <p className="text-white text-center text-lg py-10 italic">
            Glamourous makeover makes a personal commitment <br /> to realize
            the prevalent gap in the industry by providing access to high-end
            salon services at convenient times and affordable prices – any day
            of the week and <br /> any time of the day!
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
