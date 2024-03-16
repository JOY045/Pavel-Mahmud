"use client";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Define SkillProgressBar component here
const SkillProgressBar = ({ label, percentage }) => {
  return (
    <div className="mb-2">
      <p className="text-sm text-white mb-1">{label}</p>
      <div className="h-2.5 bg-gray-600 rounded-full">
        <div
          className="h-full rounded-full bg-gradient-to-r from-purple-400 to-indigo-600"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <>
        <div className="mb-4">
          <SkillProgressBar label="Adobe Photoshop" percentage={90} />
          <SkillProgressBar label="Adobe Illustrator" percentage={75} />
          <SkillProgressBar label="Adobe Audition" percentage={80} />
          <SkillProgressBar label="Adobe Premiere Pro" percentage={90} />
          <SkillProgressBar label="Adobe After Effects" percentage={85} />
        </div>
      </>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          2019-2023 <br />
          Anhui University of Technology <br />
          Ma &apos;anshan, Anhui, China <br />
          Civil Engineering
        </li>
        <br />
        <li>
          2015-2016 <br />
          Jalalabad Cantonment Public School & College <br />
          Higher Secondary Certificate <br />
          Science
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={800} height={800} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Passionate and driven professional seeking an enriching opportunity within a forward-thinking organization, where I can leverage my expertise and tenacity to contribute significantly towards innovation and collective success. Eager to collaborate with a dynamic team dedicated to catalyzing organizational advancement and achieving excellence.
          </p>
          <div className="flex flex-row justify-start mt-20">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
