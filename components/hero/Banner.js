import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

const Banner = () => {
  return (
    <section className="mx-auto sm:w-9/12  sm:py-32 py-16 ">
      <div className="lg:flexBetween gap-8 ">
        <div className="nameHeader p-3 sm:p-0">
          <h3 className="md:text-lg ">Hello, There...👋🏼</h3>
          <h1 className="mb-4 md:text-6xl text-4xl  ">
            I'm Gabryella Apriani Sinaga.
          </h1>
          <h2 className="text-3xl md:text-5xl">Frontend Engineer 💻</h2>
          <p className="sm:text-base text-sm font-normal pb-5">
            I'm a Freshgraduate in Informatics Engineering student, that
            interested Frontend development and have professional working
            experience with Web design and Web Development . I like to learn new
            technology. Right now, I'm interested using React.js and Next.js
            framework.
          </p>
        </div>
        <div
          className="w-3/4  lg:border-[#BCA37F] lg:border-4 p-4 sm:py-4 py-7   rounded flex justify-center mx-auto"
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
          }}
        >
          <Image
            className="rounded"
            src="/images/Gabryella.jpg"
            alt="gabryella"
            width={300}
            height={550}
          />
        </div>
      </div>
      <div className="flex justify-center lg:justify-start lg:mx-0 sm:pb-0 pt-3 pb-10">
        <Button
          type="submit"
          variant="bg-[#113946]"
          label="Download CV"
          href="https://drive.google.com/file/d/1JtGKWipfLplB5ycDHtW1GlAlTpRFiCGQ/view?usp=sharing"
        />
      </div>
    </section>
  );
};

export default Banner;
