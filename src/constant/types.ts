import { ProjectType } from "@/constant/project";
import { WorkType } from "./common";

type languagesType = {
  id: number;
  name: string;
  type: string;
  img: string;
};

type educationType = {
  id: number;
  title: string;
  degree: string;
  mapLocation: string;
  location: string;
  startYear: number;
  endYear: number;
  img: string;
};

type experiencesType = {
  id: number;
  name: string;
  position: string;
  linkedInUrl: string;
  startDate: string;
  endDate: string;
  location: string;
  companyUrl: string;
  img: string;
  type: WorkType;
};

type projectsType = {
  id: number;
  title: string;
  description: string;
  images: string[];
  githubUrl: string;
  publicUrl: string;
  type: ProjectType;
};

type SkillType = {
  img: string;
  name: string;
};

export type {
  languagesType,
  educationType,
  experiencesType,
  projectsType,
  SkillType,
};
