enum SectionIds {
  CHAT = "home",
  ABOUT = "about",
  PROJECT = "projects",
  CONTACT = "contact",
}

const navData = [
  {
    id: SectionIds.CHAT,
    name: "Chat",
    href: "#home",
  },
  {
    id: SectionIds.ABOUT,
    name: "About",
    href: "#about",
  },
  {
    id: SectionIds.PROJECT,
    name: "Projects",
    href: "#projects",
  },
  {
    id: SectionIds.CONTACT,
    name: "Contact",
    href: "#contact",
  },
];

const firstName = "Siddhesh";
const fullName = `${firstName} Dabholkar`;

const aiChatBotInfo = `Hi! I'm ${firstName}'s AI assistant. Ask about my skills, projects,
education, or scroll for details!`;

const questions = [
  "What's your full stack tech stack?",
  "How much experience do you have as a full stack dev?",
  "Which databases you have ever used?",
  "which frontend framework/library you prefer?",
  "Which backend framework you prefer?",
];

const tech = [
  {
    id: 1,
    name: "React",
    description: "A JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    name: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 engine.",
  },
  {
    id: 3,
    name: "Express.js",
    description: "Web framework for Node.js.",
  },
  {
    id: 4,
    name: "MongoDB",
    description: "NoSQL database for modern applications.",
  },
  {
    id: 6,
    name: "Next.js",
    description: "React framework for production.",
  },
  {
    id: 7,
    name: "Fastify",
    description: "Fast and low overhead web framework for Node.js.",
  },
  {
    id: 8,
    name: "Turso",
    description: "A serverless database for modern applications.",
  },
  {
    id: 10,
    name: "Redis",
    description:
      "In-memory data structure store, used as a database, cache, and message broker.",
  },
  {
    id: 11,
    name: "React Native",
    description: "Framework for building native apps using React.",
  },
  {
    id: 12,
    name: "TypeScript",
    description: "A superset of JavaScript that compiles to plain JavaScript.",
  },
  {
    id: 13,
    name: "GraphQL",
    description:
      "A query language for APIs and a runtime for executing those queries with your existing data.",
  },
  {
    id: 14,
    name: "Python",
    description:
      "A high-level programming language for general-purpose programming.",
  },
  {
    id: 15,
    name: "PineconeDB",
    description: "A vector database for machine learning applications.",
  },
];

export { navData, questions, fullName, aiChatBotInfo, SectionIds };
