import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import MyReviews from "../../Pages/MyReviews/MyReviews/MyReviews";
import MyReviewUpdate from "../../Pages/MyReviews/MyReviewUpdate/MyReviewUpdate";
import ReviewSection from "../../Pages/ServiceDetails/ReviewSection/ReviewSection";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails/ServiceDetails";
import ServiceDetailsSection from "../../Pages/ServiceDetails/ServiceDetailsSection/ServiceDetailsSection";
import Services from "../../Pages/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Route404 from "../Route404/Route404";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://bridal-makeover-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myReviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "/reviewUpdate/:id",
        element: <MyReviewUpdate></MyReviewUpdate>,
        loader: ({ params }) =>
          fetch(
            `https://bridal-makeover-server.vercel.app/reviewUpdate/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "*",
    element: <Route404></Route404>,
  },
]);
