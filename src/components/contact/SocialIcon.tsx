import { SocialType } from "@/constant/types";
import { useInView, motion } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

type SocialIconProps = React.FC<{
  data: SocialType;
  index: number;
}>;
const SocialIcon: SocialIconProps = ({ data, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const Icon = data.icon;
  return (
    <motion.span
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: "easeOut",
      }}
    >
      <Link
        ref={ref}
        key={data.id}
        className="text-[2rem] h-[50px] w-[50px] bg-zinc-800 flex items-center justify-center rounded-full p-3"
        href={!data.isUrl ? `mailto:${data.href}` : data.href}
      >
        <Icon />
      </Link>
    </motion.span>
  );
};

export default SocialIcon;
