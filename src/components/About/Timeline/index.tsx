import { timeLine, timeLineDataType } from "@/constant/about";
import React, { useRef } from "react";
import WorkCard from "./WorkCard";
import { educationType, experiencesType } from "@/constant/types";
import EducationCard from "./EducationCard";
import {
  useScroll,
  useTransform,
  motion,
  useSpring,
  MotionValue,
} from "framer-motion";
import TimeLineCard from "./TimeLineCard";

type TimelineProps = React.FC<{
  beamHeight: MotionValue<string>;
}>;
const Timeline: TimelineProps = ({ beamHeight }) => {
  return (
    <div className="flex flex-col w-full overflow-hidden relative">
      <motion.div className="absolute top-0 right-0 bottom-0 left-0 ">
        <div className="w-full flex h-full flex-row  justify-between mb-12">
          <div className="w-2/12">
            <p className="text-[0.75rem] text-zinc-500">&nbsp;</p>
          </div>
          {/* <motion.span
            style={{ height: beamHeight }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-full w-[2px] bg-gradient-to-r from-blue-500 to-fuchsia-500"
          /> */}
          <div className="relative flex  justify-center">
            <motion.div
              style={{ height: beamHeight }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-[3px] bg-gradient-to-b from-blue-400 via-purple-500 via-indigo-500 to-fuchsia-500 rounded-full shadow-lg"
            >
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 w-full bg-gradient-to-b from-transparent via-white/30 to-transparent rounded-full"
                animate={{
                  y: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1,
                }}
              />
            </motion.div>
            <motion.div
              style={{ height: beamHeight }}
              className="absolute w-[1px] bg-gradient-to-b from-white/50 via-white/20 to-white/50 rounded-full"
            />
          </div>
          <div className="w-8/12">&nbsp;</div>
        </div>
      </motion.div>
      {timeLine.map((m, i) => (
        <TimeLineCard index={i} key={i} data={m} />
      ))}
    </div>
  );
};

export default Timeline;
