import React from "react";
import Heading from "./Heading";
import { Navigate, Outlet } from "react-router-dom";
import CustomizedSnackbars from "../../components/auth/Snachbar";
import { useSelector } from "react-redux";
function AuthLayout(props) {
  const { isLoggedIn } = useSelector((state) => state.auth);
  if (isLoggedIn) {
    return <Navigate to={"/hc/dashboard"} />;
  }
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
