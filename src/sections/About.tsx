import Image from "next/image";
import React from "react";
import { SectionHeading } from "../components";
import profile from "../assets/img/profile.png";
import {
  Docker,
  Nestjs,
  Nextjs,
  Nodejs,
  Postgres,
  Prisma,
  Reactjs,
  Redux,
  Scss,
  Ts,
} from "../assets/icons";

interface SkillsItemProps {
  icon: any;
  title: string;
}

const SkillsItem = ({ icon, title }: SkillsItemProps) => {
  return (
    <li>
      <Image src={icon} width={32} height={32} alt={title} priority={true} />
      <span>{title}</span>
    </li>
  );
};

function About() {
  const skills: SkillsItemProps[] = [
    {
      title: "React",
      icon: Reactjs,
    },
    {
      title: "Nodejs",
      icon: Nodejs,
    },
    {
      title: "Nextjs",
      icon: Nextjs,
    },
    {
      title: "Nestjs",
      icon: Nestjs,
    },
    {
      title: "Scss",
      icon: Scss,
    },
    {
      title: "Postgres",
      icon: Postgres,
    },
    {
      title: "Redux",
      icon: Redux,
    },
    {
      title: "Prisma",
      icon: Prisma,
    },
    {
      title: "Typescript",
      icon: Ts,
    },
    {
      title: "Docker",
      icon: Docker,
    },
  ];

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
          <p>Here are a few technologies I’ve been working with recently:</p>

          <ul className="skills-list">
            {skills.map((item, i) => (
              <SkillsItem key={i} title={item.title} icon={item.icon} />
            ))}
          </ul>
        </div>
      </div>
      <div className="about__right">
        <div className="about__right__image-box">
          <Image
            className="about__right__image-box__image"
            src={profile}
            priority={true}
            width={350}
            height={350}
            alt="Me"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
