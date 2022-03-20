import React, { useState } from "react";
import PropTypes from "prop-types";
import { SectionHeading } from "../components";

interface IWork {
  company: string;
  range: string;
  title: string;
  desc: string[];
}

const works: IWork[] = [
  {
    company: "Digius Link Algeria",
    range: "Jan 2021 - Present",
    title: "IT Engineer",
    desc: [
      "Helpdesk tasks (Soft & Hard troubleshooting, Networking..etc)",
      "Embedded System Software Develper (Indestrial Timers, Counters and Temperature regulators)",
      "Fullstack Developer, Building platforms that the company needs (Reporting System, Work Orders Manager, Mini CRM ..etc)",
    ],
  },
  {
    company: "Future",
    range: "Not Yet - ??",
    title: "Fullstack Developer",
    desc: ["Some thing CRAZY XD"],
  },
];

const Work = () => {
  const [activeTab, setActiveTab] = useState<number>(works.length - 1);
  return (
    <div className="work">
      <SectionHeading title="Where I’ve Worked" index={2} />
      <div className="work__body">
        <div className="work__body__tab">
          {works.map((work, i) => (
            <div
              key={i}
              className={`work__body__tab__item ${
                activeTab === i && "work__body__tab__item--active"
              }`}
              onClick={() => setActiveTab(i)}
            >
              {work.company}
            </div>
          ))}
        </div>
        <div className="work__body__detail">
          {works.map(
            (work, i) =>
              activeTab == i && (
                <>
                  <div className="work__body__detail__title">
                    {work.title} <span>@ {work.company}</span>
                  </div>
                  <div className="work__body__detail__range">{work.range}</div>
                  <ul>
                    {work.desc.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
