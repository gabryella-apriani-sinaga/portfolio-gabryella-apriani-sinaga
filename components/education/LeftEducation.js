import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LeftEducation = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div
      className="w-1/4 bg-[#bca37f] h-[6rem] inline-block"
      data-aos="fade-right"
      style={{ overflow: "hidden" }} // Tambahkan style overflow
    ></div>
  );
};

export default LeftEducation;
