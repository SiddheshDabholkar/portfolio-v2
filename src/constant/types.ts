import { ProjectType } from "@/constant/project";
import { WorkType } from "./common";
import { timeLineDataType } from "./about";
import { IconType } from "react-icons";

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

type TechType = {
  id: number;
  name: string;
  isBeginner: boolean;
  description: string;
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
  image: string;
  githubUrl: string;
  publicUrl: string;
  type: ProjectType;
  technologies: string[];
};

type SkillType = {
  img: string;
  name: string;
};

type TimeLineType = {
  id: number;
  date: string;
  description: string;
  type: timeLineDataType;
  data: educationType | experiencesType;
};

type SocialType = {
  id: number;
  name: string;
  href: string;
  icon: IconType;
  isUrl: boolean;
};

export type {
  SocialType,
  languagesType,
  educationType,
  experiencesType,
  projectsType,
  SkillType,
  TechType,
  TimeLineType,
};
