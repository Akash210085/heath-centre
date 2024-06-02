import React from "react";
import Heading from "./Heading";
import { Outlet } from "react-router-dom";
function AuthLayout() {
  return (
    <div>
      <Heading />
      <Outlet />
    </div>
  );
}

export default AuthLayout;
