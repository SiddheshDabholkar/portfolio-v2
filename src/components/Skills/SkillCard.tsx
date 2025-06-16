import { SkillType } from "@/constant/types";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type SkillCardProps = React.FC<{
  data: SkillType;
}>;

const SkillCard: SkillCardProps = ({ data }) => {
  return (
    <div className="flex h-[150px] w-[110px] rounded-xl flex-col border border-zinc-800 items-center justify-between p-1 bg-zinc-900">
      <motion.div
        className="h-full w-full flex items-center justify-center"
        initial={{ filter: "grayscale(1)" }}
        whileHover={{ filter: "grayscale(0)" }}
        transition={{ duration: 0.3 }}
      >
        <Image src={data.img} height={80} width={80} alt={data.name} />
      </motion.div>
      <p className="text-center text-[0.75rem] text-zinc-300">{data.name}</p>
    </div>
  );
};

export default SkillCard;
