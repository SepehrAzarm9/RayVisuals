import React from "react";
import logo from "../../../../components/assets/images/whitelogo.png";

const Footer = () => {
  return (
    <div className="py-12 px-24 flex flex-row justify-between items-center w-[99vw] h-fit bg-[#05081B]">
      <div className="flex flex-row">
        <img src={logo} alt="logo" width="55" height="55" />
        <h1 className="font-poppins text-4xl font-bold">Ray Visuals</h1>
      </div>
      <div className="font-Inter text-base font-normal leading-6">
        &copy; 2024 Ray Visuals. All rights reserverd
      </div>
    </div>
  );
};

export default Footer;
