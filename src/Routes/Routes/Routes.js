import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
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
    ],
  },
  {
    path: "*",
    element: <Route404></Route404>,
  },
]);
