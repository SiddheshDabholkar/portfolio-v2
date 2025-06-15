import { experiences } from "@/constant/about";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import ExperienceCard from "./ExperienceCard";

const WorkTimeLine = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const beamHeight = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div className="flex flex-col sm:flex-row w-full items-center justify-center gap-2">
      <div className="none sm:flex w-3/6  p-3 h-full flex flex-col items-center justify-center">
        <svg
          height={60}
          width={60}
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fff"
            d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 7h28v2.2H4Zm0 22V10.8h28V29Z"
          />
          <path fill="#fff" d="M17 23h6v2h-6z" />
          <path
            fill="#fff"
            d="m7 15.68 6.79 3.12L7 21.91v2.2l9.6-4.41v-1.81L7 13.48z"
          />
          <path fill="none" d="M0 0h36v36H0z" />
        </svg>
        <p className="text-center w-full text-[1rem]">Experience</p>
      </div>
      <div
        ref={ref}
        className="flex flex-row gap-2 w-full relative p-[1px] overflow-hidden rounded-2xl"
      >
        <motion.div
          transition={{ ease: "easeInOut" }}
          className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-0 rounded-xl"
          style={{ height: beamHeight }}
        />
        <div className=" w-full flex flex-col gap-4 z-10 h-full bg-zinc-950 p-2 rounded-2xl relative">
          {experiences.map((m) => (
            <ExperienceCard data={m} key={m.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkTimeLine;
