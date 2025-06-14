import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import DashboardLayout from "@/layout/DashboardLayout";

import BuildCoverLetter from "@/pages/BuildCoverLetter";
import TrackJobs from "@/pages/TrackJobs";
import BuildResume from "@/pages/BuildResume";
import Profile from "@/pages/Profile";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    
  },
  {
    path: "/buildcoverletter",
    element: <BuildCoverLetter></BuildCoverLetter>,
  },
  {
    path: "/trackjobs",
    element: <TrackJobs></TrackJobs>,
  },
  {
    path: "/buildresume",
    element: <BuildResume></BuildResume>,
  },
  {
    path: "/profile",
    element: <Profile></Profile>,
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
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default Router;
