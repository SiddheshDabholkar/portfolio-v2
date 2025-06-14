import { education } from "@/constant/about";
import { educationType } from "@/constant/types";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const EducationTimeline = () => {
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
          xmlns="http://www.w3.org/2000/svg"
          height={60}
          width={60}
          viewBox="0 0 52 52"
          xmlSpace="preserve"
        >
          <path
            d="M25.8 26.7c-1.2.1-2.3-.4-3.5-.8-6.3-2.1-12.7-4.2-19-6.3-.4-.2-.7-.3-1-.6-.4-.3-.4-.7 0-1 .3-.2.7-.5 1.1-.6 6.8-2 13.5-4 20.3-6.1 1.5-.5 3.1-.5 4.7 0l20.1 6c.4.2.8.3 1.2.6.5.3.5.8 0 1.1-.3.2-.6.4-1 .5-6.7 2.2-13.4 4.5-20.2 6.7-.9.4-1.7.5-2.7.5m-13.3.3c-1-.2-1.2.4-1.2.9v7.6c0 .9.3 1.4.9 2 .2.2.5.4.7.6 1.6 1.1 3.5 1.8 5.4 2.3 3.8 1 7.6 1.2 11.5.7 2.5-.3 5-1 7.3-2 1-.5 2-1 2.7-1.8.5-.5.7-1 .6-1.7.1-2.4.1-4.9.1-7.4 0-1.4-1-1.2-1.4-1.1-3.5 1.2-7.2 2.3-10.7 3.5-1.8.6-3.5.6-5.2 0zm33.4-2.3c-.3.1-.4.2-.4.6v6.8c0 .2-.1.5-.2.7-.5 1.2-1 2.4-1.4 3.6-.4 1.1-.2 2.3.6 3.1.2.3.6.6.9.8.3.3.8.4 1.2.5.7.1 1.3-.3 1.8-.7.2-.2.5-.4.7-.7.6-.8.7-1.8.5-2.7-.3-1.4-.9-2.6-1.5-3.8-.2-.2-.2-.6-.2-.8v-7.4c0-.5-.4-.4-.6-.3z"
            fill="#fff"
          />
        </svg>
        <p className="text-center w-full text-[1rem]">Education</p>
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
          {education.map((m) => (
            <EducationCard data={m} key={m.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationTimeline;

type EducationCardProps = React.FC<{
  data: educationType;
}>;
const EducationCard: EducationCardProps = ({ data }) => {
  return (
    <div className="border border-zinc-700 flex flex-col sm:flex-row gap-2 w-full rounded-xl p-3 ">
      <div className="w-[80px]">
        <div className="h-[80px] w-[80px] overflow-hidden rounded-lg bg-gradient-to-r from-fuchsia-600 to-purple-600  p-[2px]">
          <div className="h-full w-full relative overflow-hidden rounded-lg bg-white">
            <Image objectFit="cover" fill alt={data.title} src={data.img} />
          </div>
        </div>
      </div>
      <div className="w-full">
        <p className="text-[1rem] sm:text-[0.9rem] mb-2 font-bold">
          {data.title}
        </p>
        <p className="text-[0.85rem] sm:text-[0.75rem] mb-1 text-zinc-400">
          {data.location}
        </p>
        <div className="text-[0.75rem] sm:text-[0.65rem] mb-1 text-zinc-400">
          {data.startYear} - {data.endYear}
        </div>
      </div>
    </div>
  );
};
