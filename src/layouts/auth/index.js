import React from "react";
import Heading from "./Heading";
import { Outlet } from "react-router-dom";
import CustomizedSnackbars from "../../components/auth/Snachbar";
function AuthLayout(props) {
  return (
    <div>
      <Heading />
      <Outlet />
      <CustomizedSnackbars
        snachbarData={props.snachbarData}
        showSnachbar={props.showSnachbar}
        setShowSnachbar={props.setShowSnachbar}
        severity={props.severity}
      />
    </div>
  );
}

export default AuthLayout;
