import { bio, education, experiences, languages } from "./about";
import { socials } from "./contact";
import { projects } from "./project";
import { tech } from "./skills";

const formatLanguages = (): string => {
  return languages
    .map((lang) => `Language: ${lang.name}, Proficiency: ${lang.type}`)
    .join("\n");
};

const formatEducation = (): string => {
  return education
    .map(
      (edu) =>
        `Institution: ${edu.title}, Location: ${edu.location}, Degree: ${edu.degree}, Duration: ${edu.startYear} - ${edu.endYear}`
    )
    .join("\n");
};

const formatExperiences = (): string => {
  return experiences
    .map(
      (exp) =>
        `Company: ${exp.name}, Position: ${exp.position}, Location: ${exp.location}, Duration: ${exp.startDate} - ${exp.endDate}, LinkedIn: ${exp.linkedInUrl}`
    )
    .join("\n");
};

const formatSocials = (): string => {
  return socials.map((exp) => `Company: ${exp.name}(${exp.href}) `).join("\n");
};

const formatProjects = (): string => {
  return projects
    .map(
      (p, i) =>
        `Project ${i + 1}: Project  name is ${
          p.title
        }.live link can be found at ${
          p.publicUrl
        }.Source code can be found at ${
          p.githubUrl
        }.description of the project: ${p.description}`
    )
    .join("\n");
};

const formatSkills = () => {
  return `As of now i am experienced with ${tech
    .map((m) => `${m.name}`)
    .join(",")}`;
};

const fullInfo = `
${bio}

Languages:
${formatLanguages()}

Education:
${formatEducation()}

Experiences:
${formatExperiences()}

Projects:
${formatProjects()}

Skills:
${formatSkills()}

Socials:
${formatSocials()}
`;

export { fullInfo };
