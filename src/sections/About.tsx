import Image from "next/image";
import React from "react";
import { SectionHeading } from "../components";
import profile from "../assets/img/profile.png";

function About() {
  return (
    <div className="about">
      <div className="about__left">
        <SectionHeading />
        <div className="about__left__body">
          <p>
            I am a Full-Stack developer located in Algeria (Algiers). I am
            passionated about leveraging my diverse backgrounds to decipher
            challenging problems and create delightful experiences.
          </p>
          <p>
            I sharped my skils at Web, Mobile and Embedded Systems development.
          </p>
        </div>
      </div>
      <div className="about__right">
        <Image src={profile} width={500} height={500} alt="Me" />
      </div>
    </div>
  );
}

export default About;
