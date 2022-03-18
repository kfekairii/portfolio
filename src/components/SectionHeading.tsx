import React from "react";

function SectionHeading({ title, index }: { title: string; index: number }) {
  return (
    <div className="section-heading">
      <span className="section-heading__number">0{index}. </span>
      <span className="section-heading__text">{title}</span>
      <span className="section-heading__line" />
    </div>
  );
}

export default SectionHeading;
