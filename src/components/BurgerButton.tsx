import React, { useState } from "react";

function BurgerButton({
  openMenu = false,
  onClick,
}: {
  openMenu: boolean;
  onClick?: () => void;
}) {
  return (
    <div className="burger" onClick={onClick}>
      <div className="burger__box">
        <div
          className={`burger__box__bar burger__box__bar__1 ${
            openMenu ? "burger__box__bar__1--close" : ""
          }`}
        />
        <div
          className={`burger__box__bar burger__box__bar__2 ${
            openMenu ? "burger__box__bar__2--close" : ""
          }`}
        />
        <div
          className={`burger__box__bar burger__box__bar__3 ${
            openMenu ? "burger__box__bar__3--close" : ""
          }`}
        />
      </div>
    </div>
  );
}

export default BurgerButton;
