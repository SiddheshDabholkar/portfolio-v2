import { projectsType } from "./types";

enum ProjectType {
  PERSONAL = "PERSONAL",
  WORK = "WORK",
}

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
  },
];

export { projects, ProjectType };
