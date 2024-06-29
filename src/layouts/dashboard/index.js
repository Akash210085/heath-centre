import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import IconTabs from "./Tabs";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
function DashboardLayout() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  if (!isLoggedIn) {
    return <Navigate to={"/auth/login"} />;
  }
  return (
    <div>
      <Header />
      <IconTabs />
      <Outlet />
      <Footer />
    </div>
  );
}

export default DashboardLayout;
