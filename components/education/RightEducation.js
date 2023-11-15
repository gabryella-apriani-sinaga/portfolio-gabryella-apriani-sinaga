import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const RightEducation = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="sm:w-1/4 w-1/5 inline-block" style={{ overflow: "hidden" }}>
      <div className="bg-[#bca37f] h-[6rem]" data-aos="fade-left"></div>
    </div>
  );
};

export default RightEducation;
