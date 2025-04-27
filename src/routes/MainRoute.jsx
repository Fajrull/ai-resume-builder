import Layout from "@/layouts/Layout";
import SignInPage from "@/pages/auth/SignInPage";
import Dashboard from "@/pages/Dashboard/Dashboard";
import HomePage from "@/pages/Home/HomePage";
import React from "react";
import { createBrowserRouter } from "react-router-dom";

const MainRoute = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth/sign-in",
    element: <SignInPage />,
  },
]);

export default MainRoute;
