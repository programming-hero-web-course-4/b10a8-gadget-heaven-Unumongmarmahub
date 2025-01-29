import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Result = () => {
  return (
    <div>
      {/* nav  */}
      <Navbar />
      {/* dynamic part  */}
      <div className="min-h-[calc(100vh-285px)]">
        <Outlet />
      </div>
      {/* foot  */}
      <Footer />
    </div>
  );
};

export default Result;
