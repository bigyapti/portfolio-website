"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NLPR",
    description: "The Helmet and License Plate Detection System is a web app using YOLOv8 and OpenCV to identify helmets and Nepali license plates.",
    image: "/images/projects/1.png",
    tag: ["All", "Web","AI"],
    gitUrl: "https://github.com/bigyapti/NLPR",
    previewUrl: "/images/projects/1.png",
  },
  {
    id: 2,
    title: "CV Analyzer",
    description: "The CV Analyzer is a web application that uses NLP techniques to analyze resumes and rank candidates.",
    image: "/images/projects/cv.png",
    tag: ["All", "Web","AI"],
    gitUrl: "https://github.com/bigyapti/CV_Analyzer",
    previewUrl: "/images/projects/cv.png",
  },
  {
    id: 3,
    title: "GarbageCollectorAI",
    description: "The GarbageCollectorAI  employs  Deep Q-Learning and trains an AI agent for efficient garbage collection in a digital environment.",
    image: "/images/projects/2.png",
    tag: ["All","AI"],
    gitUrl: "https://github.com/bigyapti/GarbageCollectorAI",
    previewUrl: "/images/projects/2.png",
  },
  {
    id: 4,
    title: "Vatsala Devi",
    description: "This project focuses on creating a 3D model of Vatsala Devi Temple using computer graphics tools such as Blender and OpenGL. ",
    image: "/images/projects/vd.png",
    tag: ["All"],
    gitUrl: "https://github.com/bigyapti/Vatshala_Devi",
    previewUrl: "/images/projects/vd.png",
  },
  {
    id: 5,
    title: "StarWars",
    description: "StarWars focuses on implementing object-oriented programming using C++ and SFML for game development.",
    image: "/images/projects/sw.png",
    tag: ["All"],
    gitUrl: "https://github.com/bigyapti/StarWars",
    previewUrl: "/images/projects/sw.png",
  },
  {
    id: 6,
    title: "Expense Tracker",
    description: "Website made using Django and chart.js to track expenses and income.",
    image: "/images/projects/et.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/bigyapti/expense-tracker",
    previewUrl: "/images/projects/et.png",
  },
  {
    id: 7,
    title: "Pathfinder",
    description: "Pathfinder generates random maze using DFS and solves the generated maze using A* search algorithm.",
    image: "/images/projects/pw.png",
    tag: ["All", "Web","AI"],
    gitUrl: "https://github.com/bigyapti/PathFinder",
    previewUrl: "/images/projects/pw.png",
  },
  {
    id: 8,
    title: "Portfolio Website",
    description: "This is a portfolio website built using Next.js and Tailwind CSS.",
    image: "/images/projects/mg.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/bigyapti/portfolio-website",
    previewUrl: "/images/projects/mg.png",
  },
  {
    id: 9,
    title: "Image Fusion",
    description: "Multi-focus image fusion uses CNNs to combine images with different focus depths into one image that preserves all information.",
    image: "/images/projects/if.png",
    tag: ["All","AI"],
    gitUrl: "https://github.com/bigyapti/PathFinder",
    previewUrl: "/images/projects/if.png",
  },
  {
    id: 10,
    title: "Website Summerizer",
    description: "The web page summarization tool utilizes Selenium for web scraping, the Google Gemini API for content summarization, and Gradio for the user interface.",
    image: "/images/projects/ws.png",
    tag: ["All","AI","Web"],
    gitUrl: "https://github.com/bigyapti/PathFinder",
    previewUrl: "/images/projects/ws.png",
  },
  

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
