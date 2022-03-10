import React from "react";

interface AppButtonProps {
  onClick?: () => {};
}

function AppButton({ onClick }: AppButtonProps) {
  return (
    <div className="btn" onClick={onClick}>
      Resume
    </div>
  );
}

export default AppButton;
