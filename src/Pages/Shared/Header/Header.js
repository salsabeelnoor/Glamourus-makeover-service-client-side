import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../assets/images/logo2.png";
import clock from "../../../assets/images/clock.png";
import loc from "../../../assets/images/location.png";
//#A7144C
const Header = () => {
  return (
    <div className="bg-base-100">
      <div className=" flex flex-col lg:px-10 py-5">
        <div className="lg:flex lg:flex-row lg:justify-between hidden lg:px-5">
          <div className="flex lg:justify-start justify-center">
            <img
              className="lg:w-16 lg:h-16 w-12 h-12 mt-[-5px]"
              src={logo}
              alt=""
            />
            <Link
              to="/"
              className="custom-font lg:text-5xl text-2xl text-[#9a063e]"
            >
              GlamourUS Makeover
            </Link>
          </div>
          <div className="lg:flex hidden">
            <img className="w-12 h-12" src={clock} alt="" />
            <div className="pl-3">
              <p className="custom-font text-gray-500 ">Opening Hours:</p>
              <p className="text-[12px] text-black">
                Sat to Fri: 11:00 am — 10:00 pm
              </p>
            </div>
          </div>
          <div className="lg:flex hidden">
            <img className="w-12 h-12" src={loc} alt="" />
            <div className="pl-3 mt-[-4px]">
              <p className="custom-font text-gray-500 ">Our Location:</p>
              <p className="text-[12px] text-black">Gulshan Police plaza,</p>
              <p className="text-[12px] text-black">Gulshan-1</p>
            </div>
          </div>
        </div>
        <hr className="lg:block hidden border-1 bg-slate-400 mx-5 my-2" />
        <div className="navbar bg-base-100 lg:px-5">
          <div className="navbar-start">
            <ul className="menu menu-horizontal p-0 lg:flex hidden">
              <li>
                <Link
                  to="/"
                  className="text-lg font-medium uppercase hover:text-pink-800"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-lg font-medium uppercase hover:text-pink-800">
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-lg font-medium uppercase hover:text-pink-800">
                  My Reviews
                </Link>
              </li>
              <li>
                <Link
                  to="/addservice"
                  className="text-lg font-medium uppercase hover:text-pink-800"
                >
                  Add Service
                </Link>
              </li>
              <li>
                <Link className="text-lg font-medium uppercase hover:text-pink-800">
                  Blog
                </Link>
              </li>
            </ul>
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link
                    to="/"
                    className="text-base font-medium uppercase hover:text-pink-800"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium uppercase hover:text-pink-800">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium uppercase hover:text-pink-800">
                    My Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    to="/addservice"
                    className="text-base font-medium uppercase hover:text-pink-800"
                  >
                    Add Service
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium uppercase hover:text-pink-800">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="btn flex mr-2 bg-transparent border-2 border-pink-800 text-black hover:text-white hover:bg-pink-700 hover:border-2">
                    Log in
                  </Link>
                </li>
                <li>
                  <Link className="btn flex mr-2 bg-transparent border-2 border-pink-800 text-black hover:text-white hover:bg-pink-700 hover:border-2 my-2">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center flex lg:hidden pr-5">
            <img className="w-12 h-12 mt-[-5px]" src={logo} alt="" />
            <Link to="/" className="custom-font text-2xl text-[#9a063e]">
              GlamourUS Makeover
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link className="btn hidden lg:flex mr-2 bg-transparent border-2 border-pink-800 text-black hover:text-white hover:bg-pink-700 hover:border-2">
                  Log in
                </Link>
              </li>
              <li>
                <Link className="btn hidden lg:flex mr-2 bg-transparent border-2 border-pink-800 text-black hover:text-white hover:bg-pink-700 hover:border-2">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
