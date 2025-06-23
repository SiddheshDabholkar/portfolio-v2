import { fullName, WorkType } from "./common";
import {
  educationType,
  experiencesType,
  languagesType,
  TimeLineType,
} from "./types";

const bio = ` Hi, I'm ${fullName}, Software Engineer with ~3 years of hands-on experience — including 1.5 years full-time and 1.5 years as a full-stack developer intern. I specialize in building scalable, high-performance web applications and cross platform app. I’m passionate about writing clean code, shipping fast, and constantly exploring better ways to solve real-world problems.`;

const languages: languagesType[] = [
  {
    id: 1,
    name: "English",
    type: "Professional proficiency",
    img: "/country/uk.jpg",
  },
  {
    id: 4,
    name: "Konkani",
    type: "Native",
    img: "/country/in.jpg",
  },
  {
    id: 2,
    name: "Marathi",
    type: "Professional proficiency",
    img: "/country/in.jpg",
  },
  {
    id: 3,
    name: "Hindi",
    type: "Professional proficiency",
    img: "/country/in.jpg",
  },
];

const sscInfo: educationType = {
  id: 1,
  title: "Harmal panchakroshi shikshan mandal",
  location: "Arambol, Goa, India",
  degree: "SSC & HSSC",
  startYear: 2006,
  endYear: 2019,
  mapLocation: "https://maps.app.goo.gl/8WComqqdhpG91vUQ7",
  img: "/education/hphss.png",
};

const gecInfo: educationType = {
  id: 3,
  title: "Goa College of Engineering",
  location: "Farmagudi, Goa, India",
  degree: "Bachelor of Engineering in Information Technology",
  startYear: 2019,
  endYear: 2023,
  mapLocation: "https://maps.app.goo.gl/eAFnKTwNqwo8yb2f8",
  img: "/education/gec.png",
};

const education: educationType[] = [sscInfo, gecInfo];

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
  endDate: "curently working",
  location: "Remote",
  companyUrl: "https://www.innerloop.stream/",
  img: "/companies/innerloop.webp",
  type: WorkType.FULL_TIME,
};

const experiences: experiencesType[] = [
  KalpasInfo,
  cloudBloqInfo,
  innerloopInfo,
];

enum timeLineDataType {
  // BIRTHDAY = "BIRTHDAY",
  WORK = "WORK",
  EDUCATION = "EDUCATION",
}

const timeLine: TimeLineType[] = [
  {
    id: 2,
    date: "june 2006",
    description: `Started studying in ${sscInfo.title}`,
    type: timeLineDataType.EDUCATION,
    data: sscInfo,
  },
  {
    id: 6,
    date: "August 2019",
    description: `Started studying in ${gecInfo.title}`,
    type: timeLineDataType.EDUCATION,
    data: gecInfo,
  },
  {
    id: 7,
    date: KalpasInfo.startDate,
    description: `Joined ${KalpasInfo.name} as an Intern`,
    type: timeLineDataType.WORK,
    data: KalpasInfo,
  },
  {
    id: 9,
    date: cloudBloqInfo.startDate,
    description: `Joined ${cloudBloqInfo.name} as an Intern`,
    type: timeLineDataType.WORK,
    data: cloudBloqInfo,
  },
  {
    id: 11,
    date: "August 2023",
    description: `Completed BE IT in ${gecInfo.title}`,
    type: timeLineDataType.EDUCATION,
    data: gecInfo,
  },
  {
    id: 12,
    date: "August 2023",
    description: `Joined as Fullstack developer at ${innerloopInfo.name}`,
    type: timeLineDataType.WORK,
    data: innerloopInfo,
  },
];

export { bio, languages, education, experiences, timeLine, timeLineDataType };
