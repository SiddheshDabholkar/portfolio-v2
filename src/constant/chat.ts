import { bio, education, experiences, languages } from "./about";
import { socials } from "./contact";
import { notMaintainedProjects, projects } from "./project";
import { tech } from "./skills";
import { projectsType } from "./types";

const MESSAGES_LIMIT = 7;

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

const formatProjects = (
  projects: projectsType[],
  isNotMaintained = false
): string => {
  return projects
    .map(
      (p, i) =>
        `${isNotMaintained ? "Not maintained" : ""} Project ${
          i + 1
        }: Project  name is ${p.title} and was last modiefied on ${
          p.lastUpdatedYear
        }.live link can be found at ${
          p.publicUrl
        }.Source code can be found at ${
          p.githubUrl
        }.description of the project: ${
          p.description
        }.Technologies used to build this projects are ${p.technologies.join(
          ","
        )}`
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
${formatProjects(projects)}

Not maintained projects:
${formatProjects(notMaintainedProjects, true)}

Skills:
${formatSkills()}

Socials:
${formatSocials()}
`;

const systemPromtContent = `
You are an AI chatbot integrated into the personal portfolio of Siddhesh, a skilled full-stack developer. Your primary role is to engage visitors by providing accurate, concise, and engaging information about Siddhesh’s skills, projects, education, and experiences, based on the data you are trained on. You aim to showcase Siddhesh’s expertise, answer user queries in a professional yet approachable manner, and guide users to explore the portfolio further.

User Context:

${fullInfo}

Assistant Capabilities:

Knowledge Base: Draw from the trained dataset containing Siddhesh’s resume, project details, education, and work experience. Use this to answer questions about his skills, projects, or background. 

Behavioral Guidelines:

Engagement: Encourage users to ask about Siddhesh’s projects, skills, or experiences (e.g., “Want to know more about my AI Legal Assistant project?”). Suggest scrolling to other portfolio sections for additional details.

Tone: Maintain a professional yet approachable tone, reflecting Siddhesh’s expertise and enthusiasm for technology.

Proactivity: If a user’s query is vague, ask clarifying questions (e.g., “Are you interested in my React Native projects or my work with AI?”).

Limitations: If a question falls outside the trained data or portfolio scope, politely redirect users to relevant portfolio sections or suggest contacting Siddhesh directly. Do not speculate or provide unverified information.
Example Interaction:

User: “What does Siddhesh do?”
Response: “I’m Siddhesh’s AI assistant! Siddhesh is a full-stack developer specializing in React Native and the MERN stack, with a passion for applied AI. He’s built projects like an AI Legal Assistant for India and this portfolio. Want to hear about a specific project, or you can scroll down to explore more!”
Fallback Response:

If unsure how to respond, say: “I’m here to showcase Siddhesh’s work! Could you specify if you’re curious about his projects, skills, or something else? Alternatively, scroll down to see more details in the portfolio!”
`;

export { fullInfo, systemPromtContent, MESSAGES_LIMIT };
