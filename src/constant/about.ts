import { fullName, WorkType } from "./common";
import { educationType, experiencesType, languagesType } from "./types";

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

const sscInfo = {
  id: 1,
  title: "Harmal panchakroshi shikshan mandal",
  location: "Arambol, Goa, India",
  degree: "SSC",
  startYear: 2006,
  endYear: 2017,
  mapLocation: "https://maps.app.goo.gl/8WComqqdhpG91vUQ7",
  img: "/education/hphss.png",
};

const hsscInfo = {
  id: 2,
  title: "Harmal panchakroshi higher secondary school",
  location: "Arambol, Goa, India",
  degree: "HSSC",
  startYear: 2017,
  endYear: 2019,
  mapLocation: "https://maps.app.goo.gl/8WComqqdhpG91vUQ7",
  img: "/education/hphss.png",
};

const gecInfo = {
  id: 3,
  title: "Goa College of Engineering",
  location: "Farmagudi, Goa, India",
  degree: "Bachelor of Engineering in Information Technology",
  startYear: 2019,
  endYear: 2023,
  mapLocation: "https://maps.app.goo.gl/eAFnKTwNqwo8yb2f8",
  img: "/education/gec.png",
};

const education: educationType[] = [sscInfo, hsscInfo, gecInfo];

const KalpasInfo = {
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

const cloudBloqInfo = {
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

const innerloopInfo = {
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

const timeLine = [
  // {
  //   id: 1,
  //   date: "10 may 2001",
  //   description: "Birthday",
  //   type: timeLineDataType.BIRTHDAY,
  // },
  {
    id: 2,
    date: "june 2006",
    description: `Started studying in ${sscInfo.title}`,
    type: timeLineDataType.EDUCATION,
    data: sscInfo,
  },
  // {
  //   id: 3,
  //   date: "june 2017",
  //   description: `Completed studying in ${sscInfo.title}`,
  //   type: timeLineDataType.EDUCATION,
  //   data: sscInfo,
  // },
  {
    id: 4,
    date: "July 2017",
    description: `Started studying in ${hsscInfo.title}`,
    type: timeLineDataType.EDUCATION,
    data: hsscInfo,
  },
  // {
  //   id: 5,
  //   date: "May 2019",
  //   description: `Completed studying in ${hsscInfo.title}`,
  //   type: timeLineDataType.EDUCATION,
  //   data: hsscInfo,
  // },
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
  // {
  //   id: 8,
  //   date: KalpasInfo.endDate,
  //   description: `Completed 2 months of internship at ${KalpasInfo.name}`,
  //   type: timeLineDataType.WORK,
  //   data: KalpasInfo,
  // },
  {
    id: 9,
    date: cloudBloqInfo.startDate,
    description: `Joined ${cloudBloqInfo.name} as an Intern`,
    type: timeLineDataType.WORK,
    data: cloudBloqInfo,
  },
  // {
  //   id: 10,
  //   date: cloudBloqInfo.endDate,
  //   description: `Completed 1 year and 6 month as an full stack developer intern at ${cloudBloqInfo.name}`,
  //   type: timeLineDataType.WORK,
  //   data: cloudBloqInfo,
  // },
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
  // {
  //   id: 13,
  //   date: new Date().toDateString(),
  //   description: `Currently working as an Fullstack developer`,
  //   type: timeLineDataType.WORK,
  //   data: innerloopInfo,
  // },
];

export { bio, languages, education, experiences, timeLine, timeLineDataType };
