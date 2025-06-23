import { SkillType } from "@/constant/types";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type SkillCardProps = React.FC<{
  data: SkillType;
  index: number;
}>;

const SkillCard: SkillCardProps = ({ data, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
      className="flex h-[150px] w-[110px] rounded-xl flex-col border border-zinc-900 items-center justify-between p-1"
      whileHover={{
        scale: 1.02,
        boxShadow: "inset 0 2px 10px rgba(255, 255, 255, 0.06)",
      }}
    >
      <motion.div
        className="h-full w-full flex items-center justify-center"
        initial={{ filter: "grayscale(1)" }}
        whileHover={{ filter: "grayscale(0)" }}
        transition={{ duration: 0.3 }}
      >
        <Image src={data.img} height={60} width={60} alt={data.name} />
      </motion.div>
      <p className="text-center text-[0.75rem] text-zinc-300">{data.name}</p>
    </motion.div>
  );
};

export default SkillCard;
