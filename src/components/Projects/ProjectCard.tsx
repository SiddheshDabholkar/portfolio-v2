import { projectsType } from "@/constant/types";
import Link from "next/link";
import React from "react";
import { IoMdEye } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

type ProjectCardProps = React.FC<{
  data: projectsType;
}>;
const ProjectCard: ProjectCardProps = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row  border border-zinc-700 rounded-xl p-4">
      <div className="w-full md:w-4/12 h-[250px] overflow-hidden rounded-lg bg-gradient-to-r from-fuchsia-600 to-purple-600"></div>
      <div className="w-full md:w-8/12 h-full px-3 flex flex-col">
        <h1 className="text-2xl font-extrabold mb-2">{data.title}</h1>
        <p className="m-0 text-[0.8rem]">{data.description}</p>
        <div className="my-2 gap-2 flex items-center">
          <ProjectLink isGithub url={data.githubUrl} />
          <ProjectLink isGithub={false} url={data.publicUrl} />
        </div>
      </div>
    </div>
  );
};

type ProjectLinkProps = React.FC<{
  url: string;
  isGithub: boolean;
}>;
const ProjectLink: ProjectLinkProps = ({ url, isGithub }) => {
  const text = isGithub ? "View Source" : "View Live";
  const Icon = isGithub ? IoLogoGithub : IoMdEye;

  return (
    <Link
      href={url}
      className="text-[0.8rem] p-[0.45rem] px-4 rounded-full border border-zinc-400 flex flex-row items-center gap-2"
    >
      <Icon className="text-[1rem]" />
      {text}
    </Link>
  );
};

export default ProjectCard;
