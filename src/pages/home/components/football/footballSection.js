import React from "react";
import FootballBG from "../../../../components/assets/images/footbalbg.png";
import Mancity from "../../../../components/assets/images/mancity.png";
import Poster1 from "../../../../components/assets/images/poster1.png";
import Poster2 from "../../../../components/assets/images/poster2.png";

const FootballSection = () => {
  return (
    <div className="relative w-[99vw] h-screen gap-20 flex flex-row justify-center items-center">
      <img
        src={FootballBG}
        alt="Football banners and Highlihgts"
        className="w-full h-full absolute"
      />
      <div className="flex flex-col gap-5 z-10">
        <h1 className="font-poppins text-6xl font-semibold	leading-[78px]">
          Football Banners <br />
          and Heighlights
        </h1>
        <p className="font-poppins text-3xl font-light">
          Find out the best football banners
        </p>
      </div>
      <div className="flex flex-col z-10 gap-6">
        <div className="rounded-3xl w-[650px] overflow-clip">
          <img src={Mancity} alt="Manchester City" />
        </div>
        <div className="rounded-3xl w-[650px] flex flex-row justify-between">
          <div className="rounded-3xl w-[300px] overflow-clip">
            <img src={Poster1} alt="poster1" />
          </div>
          <div className="rounded-3xl w-[300px] overflow-clip h-[300px]">
            <img src={Poster2} alt="poster2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootballSection;
