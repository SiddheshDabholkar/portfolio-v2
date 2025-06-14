import React from "react";
import SectionName from "../SectionName";
import { contactHeading, contactIntro, socials } from "@/constant/contact";
import Link from "next/link";
import { SectionIds } from "@/constant/common";

const Contact = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      id={SectionIds.CONTACT}
    >
      <SectionName text={contactHeading} />
      <p className="text-center w-3/4 text-[0.7rem] md:text-[0.9rem]">
        {contactIntro}
      </p>
      <div className="flex flex-row flex-wrap gap-3 mt-6 items-center justify-center">
        {socials.map((m) => {
          const Icon = m.icon;
          return (
            <Link
              className="text-[2rem] h-[50px] w-[50px] bg-zinc-800 flex items-center justify-center rounded-full p-3"
              href={!m.isUrl ? `mailto:${m.href}` : m.href}
            >
              <Icon />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
