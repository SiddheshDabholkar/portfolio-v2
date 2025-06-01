import { SiPeerlist } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { RiStackOverflowLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const contactHeading = "Get In Touch";
const contactIntro =
  "Connect with me across various platforms. Whether you want to collaborate, discuss tech, or just say hello, I'm always open to meaningful conversations.";

const socials = [
  {
    id: 1,
    name: "Linkedin",
    href: "https://www.linkedin.com/in/siddhesh-dabholkar/",
    icon: FaLinkedin,
    isUrl: true,
  },
  {
    id: 2,
    name: "Github",
    href: "https://github.com/SiddheshDabholkar",
    icon: FaGithub,
    isUrl: true,
  },
  {
    id: 3,
    name: "Stack overflow",
    href: "https://stackoverflow.com/users/14301214/siddhesh-dabholkar",
    icon: RiStackOverflowLine,
    isUrl: true,
  },
  {
    id: 4,
    name: "X (twitter)",
    href: "https://x.com/ImPoppyyyyyy",
    icon: BsTwitterX,
    isUrl: true,
  },
  {
    id: 5,
    name: "Peerlist",
    href: "https://peerlist.io/iamsiddhesh",
    icon: SiPeerlist,
    isUrl: true,
  },
  {
    id: 6,
    name: "Gmail",
    href: "siddheshdabholkar942@gmail.com",
    icon: SiGmail,
    isUrl: false,
  },
];

export { socials, contactHeading, contactIntro };
