/* eslint-disable react/no-unescaped-entities */
import { bio, languages } from "@/constant/about";
import React, { useRef } from "react";
import LanguageCard from "./LanguageCard";
import SectionName from "../SectionName";
import { fullName, SectionIds } from "@/constant/common";
import Image from "next/image";
import Timeline from "./Timeline";
import { useScroll, useTransform, useInView, motion } from "framer-motion";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start", "end"],
  });
  const beamHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      id={SectionIds.ABOUT}
      ref={sectionRef}
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
        <p className="text-center text-[0.75rem] md:text-[0.85rem] mt-2 ">
          10 may 2001
        </p>
        <p className="text-[1.65rem] md:text-[1.85rem] text-center font-extrabold">
          {fullName}
        </p>
        <p className="text-[0.75rem] mt-2 md:text-[0.8rem] w-10/12 text-center text-zinc-400">
          {bio}
        </p>
      </div>

      <div className="mt-6 w-full">
        <div className="flex flex-row items-center justify-center flex-wrap">
          {languages.map((m) => (
            <LanguageCard key={m.id} data={m} />
          ))}
        </div>
      </div>

      <div className="mt-6 w-full">
        <Timeline beamHeight={beamHeight} />
      </div>
    </motion.div>
  );
};

export default About;
