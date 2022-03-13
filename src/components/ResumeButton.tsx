import React from "react";

interface ResumeButtonProps {
  title: string;
  onClick?: () => {};
  classes?: string;
}

function ResumeButton({ title, onClick, classes }: ResumeButtonProps) {
  return (
    <div className={`btn ${classes}`} onClick={onClick}>
      {title}
    </div>
  );
}

export default ResumeButton;
