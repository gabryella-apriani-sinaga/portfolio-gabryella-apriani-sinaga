import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS
import { useEffect } from "react";

const RightEducation = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Durasi animasi
      once: false, // Animasi hanya akan dijalankan sekali
    });
  }, []);
  return (
    <div className="w-1/4 bg-[#bca37f] h-[6rem]" data-aos="fade-left"></div>
  );
};

export default RightEducation;
