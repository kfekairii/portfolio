import React from "react";

interface NavItemProps {
  number: number;
  name: string;
  url: string;
  vertical?: boolean;
}

function NavItem({ number, name, url, vertical }: NavItemProps) {
  return (
    <li
      className={`navbar__nav__item ${
        vertical && "navbar__nav__item--vertical"
      }`}
    >
      <a href={url}>
        <span
          className={`navbar__nav__item--number ${
            vertical && "navbar__nav__item--number--vertical"
          } `}
        >
          0{number}.
        </span>
        <span
          className={`navbar__nav__item--text ${
            vertical && "navbar__nav__item--text--vertical"
          }`}
        >
          {name}
        </span>
      </a>
    </li>
  );
}

export default NavItem;
