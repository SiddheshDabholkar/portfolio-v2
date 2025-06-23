import React from "react";
import SectionName from "../SectionName";
import { contactHeading, contactIntro, socials } from "@/constant/contact";
import Link from "next/link";
import { SectionIds } from "@/constant/common";
import SocialIcon from "./SocialIcon";

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
        {socials.map((m, i) => {
          const Icon = m.icon;
          return <SocialIcon data={m} index={i} />;
        })}
      </div>
    </div>
  );
};

export default Contact;
