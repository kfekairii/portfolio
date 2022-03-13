import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../assets/icons/logo.svg";
import { ResumeButton, NavItem } from "../components";
import useScrollDirection from "../hooks/useScrollDirection";
import Menu from "./Menu";

export const navLinks = [
  {
    name: " About",
    url: "/#about",
  },
  {
    name: " Experience",
    url: "/#jobs",
  },
  {
    name: " Work",
    url: "/#projects",
  },
  {
    name: " Contact",
    url: "/#contact",
  },
];

function Nav() {
  const scrollDir = useScrollDirection("init", 25);

  return (
    <>
      <div
        className={`navbar ${
          scrollDir == "init"
            ? ""
            : scrollDir == "down"
            ? "navbar--hide"
            : "navbar--sticky"
        }`}
      >
        <Image src={Logo} height={46} width={46} alt="logo" />
        <nav>
          <ul className="navbar__nav">
            {navLinks.map((navLink, i) => (
              <NavItem
                key={navLink.name}
                number={i}
                name={navLink.name}
                url={navLink.url}
              />
            ))}
            <ResumeButton title="Resume" />
          </ul>
          <Menu />
        </nav>
      </div>
    </>
  );
}

export default Nav;
