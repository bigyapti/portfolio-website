"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>TensorFlow</li>
        <li>PyTorch</li>
        <li>Pandas</li>
        <li>NumPy</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Django</li>
        <li>Flask</li>
        <li>SQL</li>
        </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Computer Engineering at Institute of Engineering,Pulchowk Campus,Tribhuwan University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
      <li>
        <a href="https://freecodecamp.org/certification/bigyapti/data-analysis-with-python-v7" style={{ color: '#3498db', textDecoration: 'underline' }}>
          Data Analysis with Python
        </a>
      </li>
      <li>
        <a href="https://freecodecamp.org/certification/bigyapti/machine-learning-with-python-v7" style={{ color: '#3498db', textDecoration: 'underline' }}>
          Machine Learning with Python
        </a>
      </li>
    </ul>
    
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/as.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am passionate about both machine learning and web development. Proficient in HTML, CSS, JavaScript, React, Next.js, Django, Flask, and Node.js and more, I specialize in crafting responsive interfaces. Beyond web development, I am exploring machine learning with Python, TensorFlow, and PyTorch. A quick learner and team player, I am excited to contribute to projects that blend web development and machine learning for innovative applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
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
