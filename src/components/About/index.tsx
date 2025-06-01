/* eslint-disable react/no-unescaped-entities */
import {
  bio,
  education,
  experiences,
  fullName,
  languages,
} from "@/constant/about";
import React from "react";
import LanguageCard from "./LanguageCard";
import SectionHeader from "./SectionHeader";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import SectionName from "../SectionName";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-screen">
      <SectionName text="About us" />
      <div className="flex flex-row justify-start w-full gap-3 items-center">
        <div className="h-[70px] w-[70px] rounded-full bg-red-200" />
        <div>
          <p className="text-[1.85rem] font-extrabold">{fullName}</p>
          <p className=" text-[0.85rem] ">10 may 2001</p>
        </div>
      </div>

      <div className="mt-12">
        <SectionHeader text="Bio" />
        <p className="text-[0.8rem] text-zinc-400">{bio}</p>
      </div>
      <div className="mt-12 w-full">
        <SectionHeader text="Languages" />
        <div className="flex flex-row items-center justify-start flex-wrap gap-3">
          {languages.map((m) => (
            <LanguageCard key={m.id} data={m} />
          ))}
        </div>
      </div>
      <div className="mt-12 w-full">
        <SectionHeader text="Education" />
        <div className="flex flex-row gap-3">
          {education.map((m) => (
            <EducationCard data={m} key={m.id} />
          ))}
        </div>
      </div>
      <div className="mt-12 w-full">
        <SectionHeader text="Experience" />
        <div className="flex flex-row gap-3">
          {experiences.map((m) => (
            <ExperienceCard data={m} key={m.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
