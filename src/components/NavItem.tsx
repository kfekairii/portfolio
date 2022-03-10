import React from "react";

interface NavItemProps {
  number: number;
  name: string;
  url: string;
}

function NavItem({ number, name, url }: NavItemProps) {
  return (
    <li className="navbar__nav__item">
      <a href={url}>
        <span className="navbar__nav__item--number">0{number}.</span>
        <span className="navbar__nav__item--text">{name}</span>
      </a>
    </li>
  );
}

export default NavItem;
