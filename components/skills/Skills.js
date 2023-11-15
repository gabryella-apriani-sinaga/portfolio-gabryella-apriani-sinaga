import React from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 700, // Durasi animasi
      once: false, // Animasi hanya akan dijalankan sekali
    });
  }, []);
  return (
    <>
      <h3
        className="about text-4xl text-center sm:mt-24  mt-12 mb-9 "
        id="skills"
      >
        Skills
      </h3>
      <section className="mx-auto sm:w-9/12 p-4 sm:p-0">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-rows-2 gap-10 grid-cols-2">
          <div data-aos="flip-up" className="bg-[#bca37f] h-auto py-5 rounded ">
            <div className="skill-shadow p-2 w-2/5  rounded-md bg-white mx-auto hover:scale-[1.1] transition-all duration-[300ms]">
              <Image
                src="/images/JavaScript-logo.png"
                alt="logo-itdel"
                width={100}
                height={100}
              />
            </div>
            <p className="text-center py-2 text-white text-bold text-xl">
              JavaScript
            </p>
          </div>

          <div
            data-aos="flip-up"
            className="bg-[#bca37f]  h-auto py-5 rounded "
          >
            <div className="skill-shadow p-2 w-2/5  rounded-md bg-white mx-auto hover:scale-[1.1] transition-all duration-[300ms]">
              <Image
                src="/images/nodejs-logo.png"
                alt="logo-itdel"
                width={100}
                height={100}
              />
            </div>
            <p className="text-center  text-white text-bold text-xl">Node</p>
          </div>

          <div data-aos="flip-up" className="bg-[#bca37f] h-auto py-5 rounded ">
            <div className="skill-shadow p-2 w-2/5  rounded-md bg-white mx-auto hover:scale-[1.1] transition-all duration-[300ms]">
              <Image
                src="/images/reactjs-logo.png"
                alt="logo-itdel"
                width={100}
                height={100}
              />
            </div>
            <p className="text-center  text-white text-bold text-xl">ReactJS</p>
          </div>

          <div data-aos="flip-up" className="bg-[#bca37f] h-auto py-5 rounded ">
            <div className="skill-shadow p-2 w-2/5  rounded-md bg-white mx-auto hover:scale-[1.1] transition-all duration-[300ms]">
              <Image
                src="/images/nextjs-logo.png"
                alt="logo-itdel"
                width={100}
                height={120}
              />
            </div>
            <p className="text-center  text-white text-bold text-xl">NextJS</p>
          </div>

          <div data-aos="flip-up" className="bg-[#bca37f] h-auto py-5 rounded ">
            <div className="skill-shadow p-2 w-2/5  rounded-md bg-white mx-auto hover:scale-[1.1] transition-all duration-[300ms]">
              <Image
                src="/images/typescript-logo.png"
                alt="logo-itdel"
                width={100}
                height={120}
              />
            </div>
            <p className="text-center  text-white text-bold text-xl">
              TypeScript
            </p>
          </div>

          <div data-aos="flip-up" className="bg-[#bca37f] h-auto py-5 rounded ">
            <div className="skill-shadow p-2 w-2/5  rounded-md bg-white mx-auto hover:scale-[1.1] transition-all duration-[300ms]">
              <Image
                src="/images/tailwind-logo.jpg"
                alt="logo-itdel"
                width={100}
                height={160}
              />
            </div>
            <p className="text-center  text-white text-bold text-xl py-4">
              Tailwind
            </p>
          </div>

          <div data-aos="flip-up" className="bg-[#bca37f] h-auto py-5 rounded ">
            <div className="skill-shadow p-2 w-2/5  rounded-md bg-white mx-auto hover:scale-[1.1] transition-all duration-[300ms]">
              <Image
                src="/images/materialui-logo.png"
                alt="logo-itdel"
                width={100}
                height={160}
              />
            </div>
            <p className="text-center  text-white text-bold text-xl ">
              Material UI
            </p>
          </div>

          <div data-aos="flip-up" className="bg-[#bca37f] h-auto py-5 rounded ">
            <div className="skill-shadow p-2 w-2/5  rounded-md bg-white mx-auto hover:scale-[1.1] transition-all duration-[300ms]">
              <Image
                src="/images/github-logo.png"
                alt="logo-itdel"
                width={100}
                height={160}
              />
            </div>
            <p className="text-center  text-white text-bold text-xl ">Github</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
