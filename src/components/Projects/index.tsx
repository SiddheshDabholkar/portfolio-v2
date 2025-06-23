import React from "react";
import { projects } from "@/constant/project";
import SectionName from "../SectionName";
import { SectionIds } from "@/constant/common";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="min-h-screen" id={SectionIds.PROJECT}>
      <SectionName text="Projects" />
      <div className="flex flex-col gap-8">
        {projects.map((m, i) => (
          <ProjectCard index={i} key={m.id} data={m} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
