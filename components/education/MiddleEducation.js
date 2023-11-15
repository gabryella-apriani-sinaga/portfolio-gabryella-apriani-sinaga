import React from "react";
import Image from "next/image";
import Location from "../ui/icon/Location";
import Gelar from "../ui/icon/Gelar";
import Awward from "../ui/icon/Awward";
import Book from "../ui/icon/Book";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS
import { useEffect } from "react";

const MiddleEducation = () => {
  useEffect(() => {
    AOS.init({
      duration: 700, // Durasi animasi
      once: false, // Animasi hanya akan dijalankan sekali
    });
  }, []);

  return (
    <div
      className="bg-[#fff2d8] h-auto lg:w-full p-5 lg:py-10 lg:pb-15 pb-28 aos-ignore"
      data-aos="zoom-in"
    >
      <div className="">
        <div className="bg-white itdel-shaddow p-5 w-2/12 mx-auto rounded-md">
          <Image
            src="/images/logo-itdel.jpg"
            alt="logo-itdel"
            width={100}
            height={100}
          />
        </div>

        <div className="sm:text-center py-3">
          <p className="font-semibold">Del Institute Of Technology</p>
          <span className="flex sm:justify-center gap-2 py-1">
            <Location />
            <p className="text-sm ">Toba, North Sumatera, Indonesia</p>
          </span>
          <span className="flex justify-center gap-2 py-1">
            <Gelar />
            <p className="text-sm ">
              Bachelor of Informatics Engineering (B.I.E) | 2019 - 2023
            </p>
          </span>

          <span className="flex sm:justify-center gap-2 py-1">
            <Awward />
            <p className="text-sm ">GPA : 3.62/4.00</p>
          </span>

          <span className="flex justify-center sm:py-1 py-2 items-center gap-2">
            <span className="flex justify-center">
              <Book />
            </span>

            <p className="text-sm sm:w-1/2 py-2">
              Thesis: Evaluation of Usability and Improvement of The Campus
              Information System (CIS) Website Interface of Del Institute of
              Technology Using Heuristic Evaluation and Think Aloud Methods
            </p>
          </span>

          <span className="flex justify-center sm:py-1 py-2 items-center gap-2">
            <span className="flex justify-center">
              <Book />
            </span>
            <p className="text-sm sm:w-1/2">
              Internship: Website Based Hiring Application for Talent
              Acquisition
            </p>
          </span>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="sm:w-1/2 flex justify-center relative">
          <Image
            className="rounded-md shaddow-foto"
            src="/images/withPakLuhut.jpeg"
            alt="with pak luhut"
            width={350}
            height={300}
          />
          <div className="bg-white lg:w-3/4 w-5/6 top-[85%] lg:h-20 absolute lg:right-[-5] lg:inset-y-20 lg:inset-x-80 rounded-md">
            <p className="p-2 text-xs">
              <i>
                I am very grateful to be able to capture the moment with
                Minister Luhut Binsar Pandjaitan in a photo.
              </i>
              <br />
              <span className="w-1/2 text-[#113946] border-2 mt-2 inline-block" />
              <br />
              <span className="p-1 text-xs">Graduation IT Del</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleEducation;
