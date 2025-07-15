import { projectsType } from "./types";

enum ProjectType {
  PERSONAL = "PERSONAL",
  WORK = "WORK",
}

const notMaintainedProjects = [
  {
    id: 12,
    title: "GIF watermarker",
    description: "Add watermark to the any GIF",
    githubUrl: "https://github.com/SiddheshDabholkar/use-gif-watermark",
    publicUrl: "https://use-gif-watermark.vercel.app/",
    image: "",
    type: ProjectType.PERSONAL,
    technologies: ["Reactjs", "Typescript"],
    lastUpdatedYear: 2023,
  },
  {
    id: 13,
    title: "useMediaHooks",
    description: "Hooks for camera,microphone and screen-recorder",
    githubUrl: "https://github.com/SiddheshDabholkar/React-Media-Hooks",
    publicUrl: "https://react-media-hooks.vercel.app/",
    image: "",
    type: ProjectType.PERSONAL,
    technologies: ["Reactjs", "Typescript"],
    lastUpdatedYear: 2022,
  },
  {
    id: 14,
    title: "Crypto App",
    description: "Crypto app built with react native reanimated and expo",
    githubUrl: "https://github.com/SiddheshDabholkar/Crypto-App",
    publicUrl: "",
    image: "",
    type: ProjectType.PERSONAL,
    technologies: ["React Native", "Typescript", "Expo", "Reanimated"],
    lastUpdatedYear: 2022,
  },
  {
    id: 15,
    title: "Vertical Onboarder",
    description: "Onboarding screen for react native with vertical scrolling",
    githubUrl: "https://github.com/SiddheshDabholkar/Onboarder",
    publicUrl: "",
    image: "",
    type: ProjectType.PERSONAL,
    technologies: ["React Native", "Typescript", "Expo", "Reanimated"],
    lastUpdatedYear: 2022,
  },
  {
    id: 16,
    title: "Whatsapp clone",
    description: "Whatsapp UI clone implemented using React native",
    githubUrl: "https://github.com/SiddheshDabholkar/Watsapp-clone",
    publicUrl: "",
    image: "",
    type: ProjectType.PERSONAL,
    technologies: ["React Native"],
    lastUpdatedYear: 2021,
  },
  {
    id: 11,
    title: "Twitter clone",
    description:
      "A twitter clone,built with MERN,apollo,graphql,cloudinary and styled-components.",
    githubUrl: "https://github.com/SiddheshDabholkar/Twitter-clone",
    image: "",
    publicUrl: "",
    type: ProjectType.PERSONAL,
    technologies: [
      "Reactjs",
      "Cloudinary",
      "Styled components",
      "graphql",
      "apollo",
    ],
    lastUpdatedYear: 2021,
  },
  {
    id: 17,
    title: "Corona stats and news",
    description:
      "Progressive web app built with next js.This PWA shows news related to corona and also covid stats of India",
    githubUrl: "https://github.com/SiddheshDabholkar/Corona",
    publicUrl: "",
    image: "",
    type: ProjectType.PERSONAL,
    technologies: ["Nextjs"],
    lastUpdatedYear: 2021,
  },
];

const projects: projectsType[] = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "A dynamic and responsive personal portfolio website designed to showcase my skills, projects, and professional journey.It serves as a central hub to demonstrate my technical abilities and passion for creating impactful digital experiences.",
    image: "/projects/portfolio.png",
    githubUrl: "https://github.com/SiddheshDabholkar/portfolio-v2",
    publicUrl: "https://iamsiddhesh.vercel.app/",
    type: ProjectType.PERSONAL,
    technologies: [
      "Nextjs",
      "Supabase",
      "Reactjs",
      "Groq",
      "Tailwind",
      "Framer-motion",
      "Typescript",
    ],
    lastUpdatedYear: 2025,
  },
  {
    id: 2,
    title: "Innerloop's landing page",
    description:
      "Developed Innerloop Stream AI, a cutting-edge platform that transforms media into personalized insights and stories. It empowers users with seamless, AI-driven content creation tools.",
    image: "/projects/innerloop.png",
    githubUrl: "",
    publicUrl: "https://www.innerloop.stream/",
    type: ProjectType.WORK,
    technologies: ["Nextjs", "Express.js", "Scss", "Framer-motion"],
    lastUpdatedYear: 2025,
  },
];

export { projects, ProjectType, notMaintainedProjects };
