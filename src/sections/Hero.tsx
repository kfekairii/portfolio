import React from "react";
import { ResumeButton } from "../components";

function Hero() {
  return (
    <div className="hero">
      <p className="hero__hi">Hi, my name is</p>
      <h1 className="hero__myname">Fekairi Khaled.</h1>
      <h1 className="hero__jobtitle">I create Full Stack apps.</h1>
      <h5 className="hero__brief">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences.
      </h5>
      <ResumeButton title="Say Hello!" classes="btn--big" />
    </div>
  );
}

export default Hero;
