import React, { useEffect, useRef } from "react";
import MainSeciton from "./components/mainSection/mainSeciton";
import SecondSection from "./components/secondSection/secondSection";
import useSmoothScrollToBottom from "../../hooks/SmoothScrollToBottom";
import Testimonials from "./components/testimonials/testimonials";
import MeetTheTeam from "./components/meetTheTeam/meetTheTeam";
import FootballSection from "./components/football/footballSection";
import Footer from "./components/footer/footer";

const HomePage = () => {
  const targetRef = useRef(null);
  const hasScrolled = useRef(false);
  const smoothScrollToBottom = useSmoothScrollToBottom(1000);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled.current) {
        hasScrolled.current = true; // Mark the first scroll as triggered

        const section = targetRef.current;
        if (section) {
          smoothScrollToBottom(targetRef, 1000);
        }

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="flex flex-col items-center justify-center h-fit gap-8 w-full pt-8 px-8 bg-backgroundPurple text-white">
      <MainSeciton />
      <SecondSection ref={targetRef} />
      <FootballSection />
      <Testimonials />
      <MeetTheTeam />
      <Footer />
    </div>
  );
};

export default HomePage;
