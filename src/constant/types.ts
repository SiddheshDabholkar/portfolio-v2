import { education } from "@/constant/about";
type languagesType = {
  id: number;
  name: string;
  type: string;
};

type educationType = {
  id: number;
  title: string;
  location: string;
  startYear: number;
  endYear: number;
};

type experiencesType = {
  id: number;
  name: string;
  position: string;
  linkedInUrl: string;
  startDate: string;
  endDate: string;
  location: string;
};

export type { languagesType, educationType, experiencesType };
