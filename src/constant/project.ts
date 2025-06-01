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
      "A dynamic and responsive personal portfolio website designed to showcase my skills, projects, and professional journey. Built with modern web technologies, this platform highlights my expertise in front-end development, UI/UX design, and creative problem-solving. The site features a clean, user-friendly interface with sections for project showcases, a detailed about page, and contact information, optimized for both desktop and mobile devices. The portfolio serves as a central hub to demonstrate my technical abilities and passion for creating impactful digital experiences.",
    images: [],
    githubUrl: "",
    publicUrl: "",
    type: ProjectType.PERSONAL,
  },
];

export { projects, ProjectType };
