import React from "react";
import LeftEducation from "./LeftEducation";
import RightEducation from "./RightEducation";
import MiddleEducation from "./MiddleEducation";

const Education = () => {
  return (
    <>
      <h3 className="about text-4xl text-center pb-10">Education</h3>
      <section
        className="mb-10 flex justify-between items-center  "
        id="education"
      >
        <LeftEducation />
        <MiddleEducation />
        <RightEducation />
      </section>
    </>
  );
};

export default Education;
