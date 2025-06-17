import { ProjectType } from "@/constant/project";
import { projectsType } from "@/constant/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdEye } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

type ProjectCardProps = React.FC<{
  data: projectsType;
}>;
const ProjectCard: ProjectCardProps = ({ data }) => {
  return (
    <div className="w-full lg:w-1/2 p-2">
      <div className="flex flex-col justify-between border h-full border-zinc-700 rounded-xl p-4">
        <div className="w-full h-[350px] overflow-hidden rounded-lg  bg-gradient-to-r from-slate-400 to-slate-900 relative p-10 flex flex-row items-center justify-center">
          <div className="relative h-full w-full overflow-hidden ">
            <Image
              className="rounded-lg"
              fill
              alt="project name"
              objectFit="cover"
              src={data.image}
            />
          </div>
        </div>
        <div className="w-full py-3 flex flex-col">
          <ProjectTypeTag type={data.type} />
          <h1 className="text-[1.35rem] my-1 font-extrabold  text-zinc-300">
            {data.title}
          </h1>
          <div className="flex flex-row my-1 gap-1 items-center flex-wrap">
            {data.technologies.map((m) => (
              <span className="px-2 py-[2px] text-[0.75rem] rounded-full bg-zinc-800  text-zinc-200">
                {m}
              </span>
            ))}
          </div>

          <p className="m-0 text-[0.8rem] text-zinc-400 mb-2">
            {data.description}
          </p>

          <div className="my-2 gap-2 flex items-center">
            {data.githubUrl && <ProjectLink isGithub url={data.githubUrl} />}
            <ProjectLink isGithub={false} url={data.publicUrl} />
          </div>
        </div>
      </div>
    </div>
  );
};

type ProjectTypeTagProps = React.FC<{
  type: ProjectType;
}>;
const ProjectTypeTag: ProjectTypeTagProps = ({ type }) => {
  return (
    <span className="text-blue-500 w-fit text-[0.75rem] px-2 rounded-xl border border-blue-400">
      {type}
    </span>
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
      target="_blank"
      className="text-[0.8rem] p-[0.45rem] px-4 rounded-full border text-black  bg-zinc-300 flex flex-row items-center gap-2"
    >
      <Icon className="text-[1rem]" />
      {text}
    </Link>
  );
};

export default ProjectCard;
