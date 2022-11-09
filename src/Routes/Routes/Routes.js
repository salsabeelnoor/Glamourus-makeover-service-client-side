import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Home from "../../Pages/Home/Home";
import ServiceDetailsSection from "../../Pages/ServiceDetails/ServiceDetailsSection/ServiceDetailsSection";
import Services from "../../Pages/Services/Services";
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
        element: <AddService></AddService>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetailsSection></ServiceDetailsSection>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <Route404></Route404>,
  },
]);
