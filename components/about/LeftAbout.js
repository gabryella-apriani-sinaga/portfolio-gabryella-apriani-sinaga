import React from "react";
import Image from "next/image";
import Linkedin from "../ui/icon/Linkedin";
import Email from "../ui/icon/Email";
import Whatsapp from "../ui/icon/Whatsapp";
import Github from "../ui/icon/Github";
import Twitter from "../ui/icon/Twitter";
import Instagram from "../ui/icon/Instagram";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS
import { useEffect } from "react";

const LeftAbout = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Durasi animasi
      once: false, // Animasi hanya akan dijalankan sekali
    });
  }, []);
  return (
    <section className=" ">
      <div
        className="w-1/2 bg-[#113946] rounded-full p-5 flex justify-center mx-auto lg:mx-0"
        style={{
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        }}
      >
        <Image
          className="rounded hover:scale-[1.2] transition-all duration-[500ms] "
          src="/images/AboutGabryella.png"
          alt="gabryella"
          width={300}
          height={450}
          data-aos="fade-up"
        />
      </div>
      <div className="flex gap-2 items-center py-5 justify-center lg:justify-normal">
        <Link
          href="mailto:gabryellaaprianisinaga@gmail.com"
          target="_blank"
          className="hover:scale-[1.4] transition-all duration-[300ms]"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            padding: 1,
            borderRadius: "4px",
          }}
        >
          <Email />
        </Link>
        <Link
          href="https://wa.me/085361944149"
          target="_blank"
          className="hover:scale-[1.4] transition-all duration-[300ms]"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            padding: 1,
            borderRadius: "4px",
          }}
        >
          <Whatsapp />
        </Link>
        <Link
          href="https://www.linkedin.com/in/gabryella-sinaga-5530471b4/"
          target="_blank"
          className="hover:scale-[1.4] transition-all duration-[300ms]"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            padding: 1,
            borderRadius: "4px",
          }}
        >
          <Linkedin />
        </Link>
        <Link
          href="https://github.com/gabryella-apriani-sinaga"
          target="_blank"
          className="hover:scale-[1.4] transition-all duration-[300ms]"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            padding: 1,
            borderRadius: "4px",
          }}
        >
          <Github />
        </Link>
        <Link
          href="https://twitter.com/GabryellaA91904"
          target="_blank"
          className="hover:scale-[1.4] transition-all duration-[300ms]"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            padding: 1,
            borderRadius: "4px",
          }}
        >
          <Twitter />
        </Link>
        <Link
          href="https://www.instagram.com/gabryellasng/?hl=id"
          target="_blank"
          className="hover:scale-[1.4] transition-all duration-[300ms]"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            padding: 1,
            borderRadius: "4px",
          }}
        >
          <Instagram />
        </Link>
      </div>
    </section>
  );
};

export default LeftAbout;
