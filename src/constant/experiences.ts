import { WorkType } from "./common";
import type { experiencesType } from "./types";

const KalpasInfo: experiencesType = {
  id: 1,
  name: "Kalpas Innovations",
  position: "React Developer Intern",
  linkedInUrl: "https://www.linkedin.com/company/kalpas-innovations",
  startDate: "Jul 2021",
  endDate: "Sep 2021",
  location: "Remote",
  companyUrl: "http://kalpas.in",
  img: "/companies/kalpas.webp",
  type: WorkType.INTERN,
};

const cloudBloqInfo: experiencesType = {
  id: 2,
  name: "CloudBloq",
  position: "Full Stack Developer Intern",
  linkedInUrl: "https://www.linkedin.com/company/cloudbloq",
  startDate: "April 2022",
  endDate: "August 2023",
  location: "Remote",
  companyUrl: "https://www.cloudbloq.io/",
  img: "/companies/cloudbloq.webp",
  type: WorkType.INTERN,
};

const innerloopInfo: experiencesType = {
  id: 3,
  name: "Innerloop Streaming AI",
  position: "Full Stack Developer",
  linkedInUrl: "https://www.linkedin.com/company/innerloop-streaming-ai",
  startDate: "August 2023",
  endDate: "August 2025",
  location: "Remote",
  companyUrl: "https://www.innerloop.stream/",
  img: "/companies/innerloop.webp",
  type: WorkType.FULL_TIME,
};

const droolmonekeyInfo: experiencesType = {
  id: 4,
  name: "Droolmonkey",
  position: "Full Stack Developer",
  linkedInUrl: "https://www.linkedin.com/company/drool-monkey",
  startDate: "December 2025",
  endDate: "current",
  location: "Inoffice",
  companyUrl: "https://droolmonkey.com/",
  img: "/companies/drool.webp",
  type: WorkType.FULL_TIME,
};

const experiences: experiencesType[] = [
  KalpasInfo,
  cloudBloqInfo,
  innerloopInfo,
  droolmonekeyInfo,
];

export {
  experiences,
  droolmonekeyInfo,
  innerloopInfo,
  cloudBloqInfo,
  KalpasInfo,
};
