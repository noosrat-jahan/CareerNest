import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import NotFound from "@/pages/NotFound";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default Router;
