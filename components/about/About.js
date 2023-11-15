import React from "react";
import LeftAbout from "./LeftAbout";
import RightAbout from "./RightAbout";

const About = () => {
  return (
    <section className="mx-auto sm:w-9/12 my-10 ">
      <h3 className="about text-4xl text-center pb-10" id="about">
        About Me
      </h3>
      <main className="grid lg:grid-cols-2 grid-cols-1 p-3 ">
        <LeftAbout />
        <RightAbout />
      </main>
    </section>
  );
};

export default About;
