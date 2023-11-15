import React from "react";
import Button from "../ui/Button";

const Contact = () => {
  return (
    <>
      <h3 className="about text-4xl text-center  my-5" id="contact">
        Contact
      </h3>
      <section className="text-center sm:w-2/5 p-3 mx-auto mb-10">
        <h1 className="text-xl font-bold">Get In Touch</h1>
        <p className="text-sm py-3">
          Although I'm not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>
        <div className="flex justify-center  lg:mx-0 sm:pb-0 pt-3 pb-10">
          <Button
            type="submit"
            variant="bg-[#113946]"
            label="Say Hello"
            href="mailto:gabryellaaprianisinaga@gmail.com"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
