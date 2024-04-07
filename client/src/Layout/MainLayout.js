import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="h-screen w-screen">
        <div>
          <Navbar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
