import React from "react";
// import ProjectCard from "./ProjectCard";
import { projects } from "@/constant/project";
import SectionName from "../SectionName";
import { SectionIds } from "@/constant/common";
import { tech } from "@/constant/skills";
import Image from "next/image";
import { projectsType } from "@/constant/types";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="min-h-screen" id={SectionIds.PROJECT}>
      <SectionName text="Projects" />
      <div className="flex flex-col gap-8">
        {projects.map((m) => (
          <ProjectCard data={m} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

type ProjectCardProps = React.FC<{
  data: projectsType;
}>;
const ProjectCard: ProjectCardProps = ({ data }) => {
  return (
    <div className="flex mb-4 w-full flex-col lg:flex-row justify-between  h-full  rounded-xl p-4 gap-4">
      <div className="w-full h-[300px] lg:h-auto lg:w-5/12 p-6 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg">
        <div className="h-full w-full p-4 relative">
          <Image objectFit="contain" fill alt={data.title} src={data.image} />
        </div>
      </div>
      <div className="w-full lg:w-7/12">
        <span className="text-[0.65rem]">{data.type}</span>
        <h1 className="text-[1.5rem] font-bold mb-2">{data.title}</h1>
        <div className="flex flex-row flex-wrap gap-2 mb-4 ">
          {data.technologies.map((m) => (
            <span className="bg-zinc-800  text-nowrap text-[0.75rem] px-2 rounded-lg">
              {m}
            </span>
          ))}
        </div>
        <p className="text-[0.85rem] text-zinc-400 mb-6">{data.description}</p>
        <div className="mt-10 flex flex-row gap-2">
          {data.githubUrl && (
            <Link
              className="bg-zinc-800  text-[0.75rem] p-2 px-6 rounded-lg"
              href={data.githubUrl}
            >
              Github
            </Link>
          )}
          {data.publicUrl && (
            <Link
              className="bg-zinc-800 text-[0.75rem] p-2 px-6 rounded-lg"
              href={data.publicUrl}
            >
              View Live
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
