import Image from "next/image";
import Link from "next/link";
import { PROJECT } from "@/constant";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 100,
      once: false,
    });
  }, []);
  return (
    <>
      <h3 className="about text-4xl text-center  my-10 mt-16" id="project">
        Project
      </h3>
      <section className="mb-10">
        {PROJECT.map((item) => (
          <div
            className="bg-white  p-5 lg:w-2/5 md:w-3/5 mx-auto rounded-md relative h-auto my-10"
            key={item.id}
            data-aos="fade-up"
            data-aos-duration="3000"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
          >
            <div className=" md:flex sm:justify-end ">
              <div className="sm:absolute xl:left-[-10%] lg:left-[-20%] md:left-[-20%]  md:top-[14%] lg:top-[13%] rounded-md flex justify-center">
                <Image
                  className="rounded-md"
                  src={item.image}
                  alt="project1"
                  width={300}
                  height={500}
                />
              </div>
              <div className="sm:w-1/2 w-2/3 mx-auto sm:mx-0 mt-2 sm:mt-0">
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm">{item.description}</p>
                <div className="grid grid-cols-3 gap-2 my-2">
                  {item.tech.map((e) => (
                    <div
                      key={e}
                      className=" bg-blue p-1 text-center rounded-full text-white text-xs"
                    >
                      {e}
                    </div>
                  ))}
                </div>

                <div className="flex justify-between mt-2">
                  <Link href={item.github} target="_blank">
                    <p className="text-sm border-2 p-1 rounded border-[#bca37f]">
                      <Github />
                    </p>
                  </Link>
                  <Link href={item.website} target="_blank">
                    <p className="text-sm border-2 p-1 rounded border-[#bca37f]">
                      <Eye />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

function Github() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="#BCA37F"
    >
      <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
    </svg>
  );
}

function Eye() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="#bca37f"
    >
      <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 11.4872 7.07719 10.9925 7.22057 10.5268C7.61175 11.3954 8.48527 12 9.5 12C10.8807 12 12 10.8807 12 9.5C12 8.48527 11.3954 7.61175 10.5269 7.21995C10.9925 7.07719 11.4872 7 12 7Z"></path>
    </svg>
  );
}

export default Project;
