import Image from "next/image";
import React from "react";
import Logo from "../assets/icons/logo.svg";
import { AppButton, NavItem } from "../components";

const navLinks = [
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
  return (
    <>
      <div className="navbar">
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
            <AppButton />
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Nav;
