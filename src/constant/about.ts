import { fullName } from "./common";
import { educationType, languagesType, TimeLineType } from "./types";
import { getExperience } from "../utils/common";
import {
  experiences,
  droolmonekeyInfo,
  innerloopInfo,
  cloudBloqInfo,
  KalpasInfo,
} from "./experiences";

const fullTimeExperience = getExperience(new Date("2023-08-01"));
const totalExperience = getExperience(new Date("2021-07-01"));

const bio = `Hi, I'm ${fullName}, Software Engineer with ${totalExperience} of hands-on experience — including ${fullTimeExperience} full-time experience as a software engineer. I specialize in building scalable, high-performance web applications and cross-platform apps. I’m passionate about writing clean code, shipping fast, and constantly exploring better ways to solve real-world problems.`;

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
    date: innerloopInfo.startDate,
    description: `Joined as Fullstack developer at ${innerloopInfo.name}`,
    type: timeLineDataType.WORK,
    data: innerloopInfo,
  },
  {
    id: 13,
    date: droolmonekeyInfo.startDate,
    description: `Joined as Fullstack developer at ${droolmonekeyInfo.name}`,
    type: timeLineDataType.WORK,
    data: droolmonekeyInfo,
  },
];

export { bio, languages, education, experiences, timeLine, timeLineDataType };
