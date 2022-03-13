import Head from "next/head";
import React, { memo, useEffect, useRef, useState } from "react";
import { ResumeButton, BurgerButton, NavItem } from "../components";
import useOnClickOutside from "../hooks/useOnClickOutside";
import { navLinks } from "./Nav";

function Menu() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuDisplay = () => {
    setOpenMenu((prevState) => !prevState);
  };

  // Hide Sidebar on resize
  const onResize = (e: any) => {
    if (e.currentTarget.innerWidth > 768) {
      setOpenMenu(false);
    }
  };

  // Blur the countent when the Sidebar is open
  useEffect(() => {
    document.body.className = openMenu ? "blur" : "";
  }, [openMenu]);

  useEffect(() => {
    const unsub = window.addEventListener("resize", onResize);
    return () => unsub;
  }, []);

  const wrapperRef = useRef(null);
  useOnClickOutside(wrapperRef, () => setOpenMenu(false));
  return (
    <div ref={wrapperRef} className="menu">
      <BurgerButton openMenu={openMenu} onClick={handleMenuDisplay} />
      <nav className={`sidebar ${openMenu ? "sidebar--show" : ""}`}>
        {navLinks.map((navLink, i) => (
          <NavItem
            key={navLink.name}
            number={i}
            name={navLink.name}
            url={navLink.url}
            vertical
          />
        ))}
        <ResumeButton classes="btn--vertical" title="Resume" />
      </nav>
    </div>
  );
}

export default memo(Menu);
