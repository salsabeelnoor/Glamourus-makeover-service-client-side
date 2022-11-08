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
      <div className=" flex flex-col px-10 py-5">
        <div className="flex flex-row lg:justify-between justify-center">
          <div className="flex lg:justify-start justify-center lg:pl-5">
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
        <hr className="lg:block hidden border-1 bg-slate-400 mx-8 my-2" />
        <div className="navbar bg-base-100">
          <div className="navbar-start">
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
                  <Link>Home</Link>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Parent
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <a>
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Get started</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
