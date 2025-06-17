import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/constant/project";
import SectionName from "../SectionName";
import { SectionIds } from "@/constant/common";
import { tech } from "@/constant/skills";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="min-h-screen" id={SectionIds.PROJECT}>
      <SectionName text="Projects" />
      <div className="flex flex-row flex-wrap items-stretch">
        {projects.map((m) => (
          <ProjectCard data={m} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
