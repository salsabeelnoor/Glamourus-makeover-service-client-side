import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Home from "../../Pages/Home/Home";
import Route404 from "../../Pages/Route404/Route404";

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
    ],
  },
  {
    path: "*",
    element: <Route404></Route404>,
  },
]);
