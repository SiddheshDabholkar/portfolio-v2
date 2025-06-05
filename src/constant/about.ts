import { fullName } from "./common";
import { educationType, experiencesType, languagesType } from "./types";

const bio = `I'm ${fullName}, a full-stack developer specializing in React Native  and MERN stack, with hands-on experience building scalable mobile and web apps. Currently, I'm diving into applied AI to enhance my development toolkit.`;

const languages: languagesType[] = [
  {
    id: 1,
    name: "English",
    type: "Full professional proficiency",
  },
  {
    id: 4,
    name: "Konkani",
    type: "Native",
  },
  {
    id: 2,
    name: "Marathi",
    type: "Full professional proficiency",
  },
  {
    id: 3,
    name: "Hindi",
    type: "Full professional proficiency",
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
