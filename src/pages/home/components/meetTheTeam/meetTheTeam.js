import React from "react";
import { ReactComponent as BoxBackground } from "../../../../components/assets/svg/secondBackground.svg";
import Anna from "../../../../components/assets/images/profile.png";

const MeetTheTeam = () => {
  return (
    <div className="relative h-screen w-[99vw] justify-center items-center flex flex-col">
      <BoxBackground className="w-full absolute top-72" />
      <div className="relative w-full justify-center items-center flex">
        <h1 className="font-poppins text-6xl font-medium leading-normal mb-16">
          MeetTheTeam
        </h1>
        <p className="absolute font-QwitcherGrypen text-9xl -top-12 text-[#9999FF] opacity-40 font-normal">
          Team
        </p>
      </div>
      <div className="flex flex-row gap-12 justify-center just items-center w-full">
        <div className="flex flex-col justify-center items-center gap-10 h-fit w-fit py-10 px-7 rounded-[20px] font-semibold bg-opacity-100 z-10 bg-teamCardBg text-4xl ">
          <p className="font-poppins">Rayan</p>
          <img src={Anna} alt="Anna" className="h-[400px]" />
          <p className="font-poppins text-3xl font-medium not-italic">Editor</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 h-fit w-fit py-10 px-7 rounded-[20px] font-semibold z-10 bg-teamCardBg text-4xl ">
          <p className="font-poppins">Alan</p>
          <img src={Anna} alt="Anna" className="h-[400px]" />
          <p className="font-poppins text-3xl font-medium not-italic">
            Designer
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 h-fit w-fit py-10 px-7 rounded-[20px] font-semibold z-10 bg-teamCardBg text-4xl ">
          <p className="font-poppins">Max</p>
          <img src={Anna} alt="Anna" className="h-[400px]" />
          <p className="font-poppins text-3xl font-medium not-italic">Editor</p>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
