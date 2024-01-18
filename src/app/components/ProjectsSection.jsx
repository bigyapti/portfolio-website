"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NLPR",
    description: "Helmet and License Plate Detection System employs YOLOv8 and OpenCV for image processing, utilizing a real-life dataset. YOLOv8's object detection capabilities are leveraged to identify helmets on individuals and recognize Nepali license plates on vehicles, enhancing safety and compliance measures.",
    image: "/images/projects/3.png",
    tag: ["All", "Web","AI"],
    gitUrl: "https://github.com/bigyapti/NLPR",
    previewUrl: "/images/projects/3.png",
  },
  {
    id: 2,
    title: "CV Analyzer",
    description: "The CV Analyzer utilizes NLP and ML algorithms to analyze resumes, providing insights into skills and experiences. It predicts suitable job sectors, highlights areas for improvement, and allows job administrators to post listings while ranking candidates' CVs for efficient recruitment. The backend is implemented using Flask, MongoDB serves as the database, and Bootstrap is employed for the frontend.",
    image: "/images/projects/cv.png",
    tag: ["All", "Web","AI"],
    gitUrl: "https://github.com/bigyapti/CV_Analyzer",
    previewUrl: "/images/projects/cv.png",
  },
  {
    id: 3,
    title: "GarbageCollectorAI",
    description: "The GarbageCollectorAI  employs  Deep Q-Learning and trains an AI agent for efficient garbage collection in a digital environment.",
    image: "/images/projects/coll.png",
    tag: ["All","AI"],
    gitUrl: "https://github.com/bigyapti/GarbageCollectorAI",
    previewUrl: "/images/projects/coll.png",
  },
  {
    id: 4,
    title: "Vatsala Devi",
    description: "This project focuses on creating a 3D model of Vatsala Devi Temple using computer graphics tools such as Blender, OpenGL, GLFW, GLAD, and GLSL. The implementation includes advanced graphics techniques like texture mapping, lighting, and shaders for realism. ",
    image: "/images/projects/vd.png",
    tag: ["All"],
    gitUrl: "https://github.com/bigyapti/Vatshala_Devi",
    previewUrl: "/images/projects/vd.png",
  },
  {
    id: 5,
    title: "StarWars",
    description: "StarWars focuses on implementing object-oriented programming using C++ and SFML for game development. The game involves piloting a spaceship to shoot asteroids, incorporating features like player controls, collisions, scoring, and lives.",
    image: "/images/projects/sw.png",
    tag: ["All"],
    gitUrl: "https://github.com/bigyapti/StarWars",
    previewUrl: "/images/projects/sw.png",
  },
  {
    id: 6,
    title: "Expense Tracker",
    description: "The Expense Tracker Django project incorporates features such as Admin panel, Ajax search, a PostgreSQL database, integration with a mail server for registration, and utilizes Chart.js for visualizing expenses and income.",
    image: "/images/projects/et.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/bigyapti/expense-tracker",
    previewUrl: "/images/projects/et.png",
  },
  {
    id: 7,
    title: "Pathfinder",
    description: "Pathfinder generates random maze using DFS and solves the generated maze using A* search algorithm",
    image: "/images/projects/mg.png",
    tag: ["All", "Web","AI"],
    gitUrl: "https://github.com/bigyapti/PathFinder",
    previewUrl: "/images/projects/mg.png",
  },
  {
    id: 8,
    title: "Portfolio Website",
    description: "",
    image: "/images/projects/mg.png",
    tag: ["All", "Web","AI"],
    gitUrl: "https://github.com/bigyapti/PathFinder",
    previewUrl: "/images/projects/mg.png",
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
