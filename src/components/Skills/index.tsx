import { tech } from "@/constant/skills";
import React from "react";
import SectionName from "../SectionName";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <SectionName text="Skills" />
      <div className="flex flex-row w-full flex-wrap gap-3 items-center justify-center mb-10">
        {tech.map((m) => (
          <SkillCard key={m.id} data={m} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
