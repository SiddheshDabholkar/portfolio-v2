import { fullName } from "./common";
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

const education: educationType[] = [
  {
    id: 1,
    title: "Harmal panchakroshi shikshan mandal",
    location: "Arambol, Goa, India",
    degree: "SSC",
    startYear: 2006,
    endYear: 2017,
  },
  {
    id: 2,
    title: "Harmal panchakroshi shikshan mandal",
    location: "Arambol, Goa, India",
    degree: "HSSC",
    startYear: 2017,
    endYear: 2019,
  },
  {
    id: 2,
    title: "Goa College of Engineering",
    location: "Farmagudi, Goa, India",
    degree: "Bachelor of Engineering in Information Technology",
    startYear: 2019,
    endYear: 2023,
  },
];

const experiences: experiencesType[] = [
  {
    id: 1,
    name: "Kalpas Innovations Pvt. Ltd.",
    position: "React Developer Intern",
    linkedInUrl: "https://www.linkedin.com/company/kalpas-innovations",
    startDate: "Jul 2021",
    endDate: "Sep 2021",
    location: "Remote",
  },
  {
    id: 2,
    name: "CloudBloq",
    position: "Full Stack Developer Intern",
    linkedInUrl: "https://www.linkedin.com/company/cloudbloq",
    startDate: "April 2022",
    endDate: "August 2023",
    location: "Remote",
  },
  {
    id: 3,
    name: "Innerloop Streaming AI",
    position: "Full Stack Developer",
    linkedInUrl: "https://www.linkedin.com/company/innerloop-streaming-ai",
    startDate: "August 2023",
    endDate: "curently working",
    location: "Remote",
  },
];

export { bio, languages, education, experiences };
