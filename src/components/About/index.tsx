/* eslint-disable react/no-unescaped-entities */
import { bio, education, experiences, languages } from "@/constant/about";
import React from "react";
import LanguageCard from "./LanguageCard";
import SectionHeader from "./SectionHeader";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import SectionName from "../SectionName";
import { fullName, SectionIds } from "@/constant/common";
import EducationTimeline from "./EducationTimeline";
import WorkTimeLine from "./WorkTimeLine";
import Image from "next/image";

const About = () => {
  return (
    <div
      id={SectionIds.ABOUT}
      className="flex flex-col items-center justify-center w-full h-full min-h-screen mb-20"
    >
      <SectionName text="About" />

      <div className="flex flex-col items-center justify-center">
        <Image
          alt="Siddhesh dabholkar"
          src="/user.jpg"
          height={100}
          width={100}
          className="rounded-full"
          objectFit="cover"
        />
        <p className=" text-[0.85rem] mt-2 ">10 may 2001</p>
        <p className="text-[1.85rem] font-extrabold">{fullName}</p>
        <p className="text-[0.8rem] w-10/12 text-center text-zinc-400">{bio}</p>
      </div>

      <div className="mt-12 w-full">
        <div className="flex flex-row items-center justify-center flex-wrap">
          {languages.map((m) => (
            <LanguageCard key={m.id} data={m} />
          ))}
        </div>
      </div>

      <div className="mt-12 w-full">
        <EducationTimeline />
      </div>

      <div className="mt-12 w-full">
        <WorkTimeLine />
      </div>
    </div>
  );
};

export default About;
