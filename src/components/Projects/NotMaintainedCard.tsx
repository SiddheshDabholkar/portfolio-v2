import { projectsType } from "@/constant/types";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

type ProjectCardProps = React.FC<{
  data: projectsType;
  index: number;
}>;
const NotMaintainedCard: ProjectCardProps = ({ data, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      className="flex mb-4 w-full flex-col bg-zinc-900/40 rounded-md p-4"
    >
      <span className="text-[0.65rem]">{data.type}</span>
      <h1 className="text-[1.5rem] font-bold mb-2">{data.title}</h1>
      <div className="flex flex-row flex-wrap gap-2 mb-2 ">
        {data.technologies.map((m) => (
          <span
            key={m}
            className="bg-zinc-800  text-nowrap text-[0.75rem] px-2 rounded-lg"
          >
            {m}
          </span>
        ))}
      </div>
      <p className="text-[0.85rem] text-zinc-400 mb-2">{data.description}</p>
      <div className="flex flex-row gap-2">
        {data.githubUrl && (
          <Link
            className="bg-zinc-800  text-[0.75rem] p-2 px-6 rounded-lg"
            href={data.githubUrl}
          >
            Github
          </Link>
        )}
        {data.publicUrl && (
          <Link
            className="bg-zinc-800 text-[0.75rem] p-2 px-6 rounded-lg"
            href={data.publicUrl}
          >
            View Live
          </Link>
        )}
      </div>
      <p className="text-[0.75rem] italic text-end text-zinc-400">
        last modified : {data.lastUpdatedYear}
      </p>
    </motion.div>
  );
};

export default NotMaintainedCard;
