import { SkillType } from "@/constant/types";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

type SkillCardProps = React.FC<{
  data: SkillType;
  index: number;
}>;

const SkillCard: SkillCardProps = ({ data, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start", "end"],
  });
  const beamHeight = useTransform(scrollYProgress, [0, 1], ["200%", "0%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      className="flex h-[150px] w-[110px] relative rounded-xl flex-col border border-zinc-900 items-center justify-between p-[1px] overflow-hidden"
      // whileHover={{
      //   scale: 1.02,
      //   boxShadow: "inset 0 2px 10px rgba(255, 255, 255, 0.06)",
      // }}
    >
      {/* <motion.span
        className="absolute top-0 right-0 z-0 left-0 bottom-0 bg-gradient-to-r from-violet-600 to-fuchsia-500"
        style={{
          height: beamHeight,
        }}
      /> */}
      <div className="h-full flex flex-col w-full z-10 bg-zinc-950 rounded-lg p-1">
        <motion.div
          className="h-full w-full flex items-center justify-center"
          initial={{ filter: "grayscale(1)" }}
          whileHover={{ filter: "grayscale(0)" }}
          transition={{ duration: 0.3 }}
        >
          <Image src={data.img} height={60} width={60} alt={data.name} />
        </motion.div>
        <p className="text-center text-[0.75rem] text-zinc-300">{data.name}</p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
