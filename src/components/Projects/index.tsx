import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/constant/project";
import SectionName from "../SectionName";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <SectionName text="Projects" />
      <div>
        {projects.map((m) => (
          <ProjectCard data={m} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
