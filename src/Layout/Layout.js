import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__main">
        <Sidebar />
        {/* the outlet is where the component specified in element prop of routes gets rendered */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
