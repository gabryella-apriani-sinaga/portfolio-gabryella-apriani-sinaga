import React from "react";
import Image from "next/image";
import Location from "../ui/icon/Location";
import Calendar from "../ui/icon/Calendar";
import { EXPERIENCE } from "@/constant";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS
import { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 900, // Durasi animasi
      once: false, // Animasi hanya akan dijalankan sekali
    });
  }, []);
  return (
    <>
      <h3 className="about text-4xl text-center sm:mt-24 my-10" id="experience">
        Experience
      </h3>
      <section className="mx-auto bg-[#FFF2D8] sm:py-12 p-4 py-12">
        <div className="grid grid-cols-2 gap-7 lg:w-3/5 md:w-3/4 mx-auto ">
          {EXPERIENCE.map((exp, index) => (
            <div
              className="lg:flex lg:justify-normal lg:text-justify  items-center gap-2 bg-[#bca37f] p-4 rounded-md "
              key={exp.id}
              data-aos="zoom-in"
            >
              <div className="skill-shadow sm:p-2 p-1 w-1/4 h-auto rounded-md bg-white mx-auto">
                <Image
                  src={exp.image}
                  alt="logo-itdel"
                  width={100}
                  height={100}
                />
              </div>
              <div className="text-white lg:mx-0 mx-auto pt-4 sm:pt-0 ">
                <p className="font-bold pb-1 text-[#113946] text-left">
                  {exp.title}
                </p>
                <p className="text-sm  pb-1 text-left">
                  <i className="font-semibold text-white">{exp.role} </i>
                  {exp.addition}
                </p>
                <span className="flex justify-left gap-1 pt-1 text-left">
                  <Calendar />
                  <p className="text-sm ">{exp.date}</p>
                </span>
                <span className="flex justify-left gap-1 py-1">
                  <Location />
                  <p className="text-sm ">{exp.place}</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
