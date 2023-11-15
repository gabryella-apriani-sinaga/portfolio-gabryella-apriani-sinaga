import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS
import { useEffect } from "react";

const RightAbout = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Durasi animasi
      once: false, // Animasi hanya akan dijalankan sekali
    });
  }, []);
  return (
    <section className="text-center" style={{ overflow: "hidden" }}>
      <div data-aos="fade-left">
        <p className="text-left">
          Hello! My name is <b>Gabryella Apriani Sinaga</b>. You can call me{" "}
          <b>Geby</b>. I live in Medan, North Sumatra. I'm a Informatics student
          at Del Institute of Technology. I like reading books, traveling and
          learning new things.
        </p>
        <p className="py-4 text-left">
          My interest in web development started back in 2021 when I decided to
          try learn HTML & CSS before entering the 5th semester with the Web
          Based Application Development course.
        </p>

        <p className="text-left">
          I specialize in <b>Frontend development</b> and have professional
          working experience with Web design and Web Development. Right now I am
          looking for opportunities in software engineer, frontend engineer, and
          react developer.
        </p>
      </div>
    </section>
  );
};

export default RightAbout;
