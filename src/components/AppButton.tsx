import React from "react";

interface AppButtonProps {
  onClick?: () => {};
  classes?: string;
}

function AppButton({ onClick, classes }: AppButtonProps) {
  return (
    <div className={`btn ${classes}`} onClick={onClick}>
      Resume
    </div>
  );
}

export default AppButton;
