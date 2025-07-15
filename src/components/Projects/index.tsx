import React from "react";
import { notMaintainedProjects, projects } from "@/constant/project";
import SectionName from "../SectionName";
import { SectionIds } from "@/constant/common";
import ProjectCard from "./ProjectCard";
import NotMaintainedCard from "./NotMaintainedCard";

const Projects = () => {
  return (
    <div className="min-h-screen" id={SectionIds.PROJECT}>
      <SectionName text="Projects" />
      <div className="flex flex-col gap-8">
        {projects.map((m, i) => (
          <ProjectCard index={i} key={m.id} data={m} />
        ))}
      </div>
      <div>
        <p className="my-4 text-zinc-400 text-[0.75rem]">
          Not maintained projects
        </p>
        <div>
          {notMaintainedProjects.map((m) => (
            <NotMaintainedCard index={m.id} key={m.id} data={m} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
