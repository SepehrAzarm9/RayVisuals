import React, { forwardRef, useState } from "react";
import MacBook from "../../../../components/assets/images/macbook.png";

const SecondSection = forwardRef((props, ref) => {
  const [selectedOption, setSelectedOption] = useState("Video");

  const handleClick = (option) => {
    setSelectedOption(option);
    console.log(option);
  };

  const content = {
    VideoTitle: (
      <h1 className="text-left font-poppins text-6xl font-semibold">
        Powerful Videos that <br />
        Tell Your Story
      </h1>
    ),
    VideoSub: (
      <p className="text-sm font-poppins text-customCaptionGrey font-normal">
        Elevate your message with compelling video content. <br />
        From short promotional clips to full-length explainer videos, <br />
        we help you communicate effectively and keep your audience engaged.
      </p>
    ),
    WebTitile: (
      <h1 className="text-left font-poppins text-6xl font-semibold">
        Web Design that <br />
        Engages and Inspires
      </h1>
    ),
    WebSub: (
      <p className="text-sm font-poppins text-customCaptionGrey font-normal">
        Create seamless online experiences with modern, responsive web design.
        <br />
        Our solutions focus on both functionality and aesthetics, ensuring that
        your site stands out <br />
        while delivering an intuitive user experience.
      </p>
    ),
    AnimationTitle: (
      <h1 className="text-left font-poppins text-6xl font-semibold">
        Bring Your Stories to <br />
        Life with Animation
      </h1>
    ),
    AnimationSub: (
      <p className="text-sm font-poppins text-customCaptionGrey font-normal">
        Captivate your audience with dynamic animations that transform ideas
        into visual experiences.
        <br /> Whether it's a product demo or a creative concept,
        <br /> animation adds an engaging layer to your content.
      </p>
    ),
  };

  return (
    <div ref={ref} className="h-fit w-full py-20 mt-20 flex justify-end gap-40">
      <div className="flex flex-col gap-8 min-w-[650px] max-w-[650px] min-h-[500px] max-h-[500px]">
        {selectedOption === "Video" && content.VideoTitle}
        {selectedOption === "Website" && content.WebTitile}
        {selectedOption === "Animation" && content.AnimationTitle}

        {/* Conditionally render Subtitle */}
        {selectedOption === "Video" && content.VideoSub}
        {selectedOption === "Website" && content.WebSub}
        {selectedOption === "Animation" && content.AnimationSub}

        <div className="w-full flex rounded-full gap-0.5 justify-between overflow-hidden border-8 border-solid border-customBlueBorder bg-customBlueBorder ">
          <div
            onClick={() => handleClick("Video")}
            className={`py-4 px-10 w-full flex justify-center items-center font-poppins font-medium text-lg cursor-pointer ${
              selectedOption === "Video" ? "bg-customBlue" : "bg-customDarkBlue"
            } transition duration-700 ease-in-out transform`}
          >
            Video
          </div>
          <div
            onClick={() => handleClick("Website")}
            className={`py-4 px-10 w-full font-poppins justify-center items-center font-medium text-lg cursor-pointer ${
              selectedOption === "Website"
                ? "bg-customBlue"
                : "bg-customDarkBlue"
            } transition duration-700 ease-in-out transform`}
          >
            Website
          </div>
          <div
            onClick={() => handleClick("Animation")}
            className={`py-4 px-10 w-full font-poppins justify-center items-center font-medium text-lg cursor-pointer ${
              selectedOption === "Animation"
                ? "bg-customBlue"
                : "bg-customDarkBlue"
            } transition duration-700 ease-in-out transform`}
          >
            Animation
          </div>
        </div>
      </div>
      <div>
        <img src={MacBook} alt="macbook" width="800" />
      </div>
    </div>
  );
});

export default SecondSection;
