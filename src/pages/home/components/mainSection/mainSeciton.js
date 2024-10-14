import React from "react";
import { motion } from "framer-motion";
import logo from "../../../../components/assets/images/logo.png";
import { ReactComponent as BoxBackground } from "../../../../components/assets/svg/boxBackground.svg";
import { ReactComponent as Editor } from "../../../../components/assets/svg/editor.svg";

const MainSeciton = () => {
  return (
    <div className="h-fit w-full bg-transparent relative bg-top rounded-lg border border-solid overflow-hidden border-customGrayBorder px-4 flex flex-col items-center justify-start">
      <BoxBackground className="w-full h-fit absolute -top-8" />
      <div className="flex items-center justify-center px-5 py-5 rounded-b-3xl overflow-hidden bg-white text-black">
        <img src={logo} alt="logo" width="55" height="55" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="flex flex-col justify-center items-center py-4 px-4 "
      >
        <p className="text-2xl text-center mt-6 font-poppins font-light	">
          98% happy clients
        </p>
        <h1 className="text-7xl text-center my-4 font-bold font-poppins bg-custom-bg-gradient bg-clip-text text-transparent">
          We Turn visions <br /> into videos
        </h1>
        <div className="flex justify-center items-center pt-8 gap-4">
          <div className="px-10 py-4 bg-customBlue rounded-full font-poppins text-lg">
            Contact us
          </div>
          <div className="px-8 py-4 border border-solid border-white rounded-full font-poppins text-lg">
            Works
          </div>
        </div>
        <div className="pt-3 font-poppins text-lg font-normal">
          Helping You Establish Your Unique Digital Footprint On Youtube
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: +200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="pt-6 px-10 overflow-hidden "
      >
        <Editor height="400" width="1100" />
      </motion.div>
    </div>
  );
};

export default MainSeciton;
