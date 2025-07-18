import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { educationType, experiencesType, TimeLineType } from "@/constant/types";
import { timeLineDataType } from "@/constant/about";
import WorkCard from "./WorkCard";
import EducationCard from "./EducationCard";

type TimeLineCardProps = React.FC<{
  data: TimeLineType;
  index: number;
}>;
const TimeLineCard: TimeLineCardProps = ({ data, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      key={data.id}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      className="w-full flex flex-row items-center justify-between mb-12 z-10"
    >
      <div className="w-2/12">
        <p className="text-[0.75rem] text-zinc-500">{data.date}</p>
      </div>
      <div className="relative flex items-center justify-center">
        <motion.div
          className="absolute w-6 h-6 rounded-full border-2 border-blue-400/30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: data.id * 0.2,
          }}
        />

        <motion.div
          className="relative w-3 h-3 rounded-full bg-gradient-to-r from-zinc-50 to-zinc-500 shadow-lg"
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0.5 bg-white/40 rounded-full" />
        </motion.div>
      </div>
      <div className="w-8/12">
        <p className="bg-zinc-800 text-[0.65rem] rounded-xl px-2 p-[2px] max-w-fit">
          {data.type}
        </p>
        {data.description && (
          <p className="text-[0.75rem] my-1 text-zinc-500">
            {data.description}
          </p>
        )}
        {data.type === timeLineDataType.WORK ? (
          <>
            <WorkCard data={data.data as experiencesType} />
          </>
        ) : data.type === timeLineDataType.EDUCATION ? (
          <>
            <EducationCard data={data.data as educationType} />
          </>
        ) : (
          <></>
        )}
      </div>
    </motion.div>
  );
};

export default TimeLineCard;
