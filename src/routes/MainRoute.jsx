import Layout from "@/layouts/Layout";
import SignInPage from "@/pages/auth/SignInPage";
import Dashboard from "@/pages/Dashboard/Dashboard";
import EditResume from "@/pages/Dashboard/EditResume";
import HomePage from "@/pages/Home/HomePage";
import ViewResume from "@/pages/view/ViewResume";
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
      {
        path: "/dashboard/resume/:resumeId/edit",
        element: <EditResume />,
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
  {
    path: "/my-resume/:resumeId/view",
    element: <ViewResume />,
  },
]);

export default MainRoute;
