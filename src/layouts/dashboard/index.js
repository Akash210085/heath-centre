import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import IconTabs from "./Tabs";
import { Outlet } from "react-router-dom";
function DashboardLayout() {
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
