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
    href: "/#home",
  },
  {
    id: SectionIds.ABOUT,
    name: "About",
    href: "/#about",
  },
  {
    id: SectionIds.PROJECT,
    name: "Projects",
    href: "/#projects",
  },
  {
    id: SectionIds.CONTACT,
    name: "Contact",
    href: "/#contact",
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

export { navData, questions, fullName, aiChatBotInfo, SectionIds };
