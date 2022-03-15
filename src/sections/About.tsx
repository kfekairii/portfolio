import React from "react";
import { SectionHeading } from "../components";

function About() {
  return (
    <div className="about">
      <div className="about__left">
        <SectionHeading />
        <div className="about__body">
          <p>
            I am a Full-Stack developer located in Algiers,Algeria. I am
            passionated about leveraging my diverse backgrounds to decipher
            challenging problems and create delightful experiences.
          </p>
          <p>I sharped my skils at Web, Mobile and Embedded Systems.</p>
        </div>
      </div>
      <div className="about__right"></div>
    </div>
  );
}

export default About;
