import Header from "@/components/custom/Header";
import { useUser } from "@clerk/clerk-react";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const Layout = () => {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isSignedIn && isLoaded) {
    return <Navigate to={"auth/sign-in"} />;
  }

  return (
    <div>
      <Header />
      <Outlet />
      <Toaster />
    </div>
  );
};

export default Layout;
