import { NAV_LINKS } from "@/constant";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      if (currentPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed w-full top-0 transition-all duration-300 ${
        isScrolled ? "bg-[#FFF2D8] pb-4 shadow" : "bg-[#FFF2D8]"
      } z-50`}
    >
      <section className="flexBetween mx-auto xl:w-11/12 px-4  ">
        <Link href="/">
          <h3 className="font-semibold text-lg logo">
            Gabryella A<span className="text-red font-black text-4xl">.</span>S
            <span className="text-blue font-black text-4xl">.</span>
          </h3>
        </Link>
        <ul
          className={`sm:p-0  gap-6 lg:pt-4 sm:flex content-center  ${
            isHamburgerActive ? "sidebarnav" : "hidden"
          }`}
        >
          <ItemNav setIsHamburgerActive={setIsHamburgerActive} />
        </ul>

        <div
          onClick={() => {
            setIsHamburgerActive((prev) => !prev);
          }}
          className="sm:hidden"
        >
          <div
            className={isHamburgerActive ? "activeHamburger" : "hamburger "}
          />
        </div>
      </section>
    </nav>
  );
};

const ItemNav = ({ setIsHamburgerActive }) => {
  return (
    <>
      {NAV_LINKS.map((link) => (
        <Link
          href={link.href}
          className="sm:text-blueDark text-white sm:font-medium font-bold  "
          key={link.key}
        >
          <li
            className="list-none"
            onClick={() => {
              setIsHamburgerActive(false); // Menutup sidebar
            }}
          >
            {link.label}
          </li>
        </Link>
      ))}
    </>
  );
};

export default Navbar;
