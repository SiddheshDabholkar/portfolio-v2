import { experiencesType } from "@/constant/types";
import Image from "next/image";
import React from "react";
import { CgBriefcase } from "react-icons/cg";
import { IoIosTime } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

type ExperienceCardProps = React.FC<{
  data: experiencesType;
}>;
const ExperienceCard: ExperienceCardProps = ({ data }) => {
  return (
    <div className="border flex flex-col sm:flex-row gap-2 border-zinc-700 rounded-xl w-full p-3">
      <div className="w-[80px]">
        <div className="h-[80px] w-[80px] overflow-hidden rounded-lg bg-gradient-to-r from-fuchsia-600 to-purple-600  p-[2px]">
          <div className="h-full w-full relative overflow-hidden rounded-lg bg-white">
            <Image objectFit="cover" fill alt={data.name} src={data.img} />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap sm:flex-nowrap flex-row items-center gap-2 mb-2">
          <p className="text-[1rem] sm:text-[0.9rem]  font-bold ">
            {data.name}
          </p>
          <p className="text-[0.75rem] rounded-full px-2 w-fit flex flex-row items-center gap-1 border border-zinc-400 text-zinc-400">
            <FaLocationDot />
            {data.location}
          </p>
        </div>
        <p className="text-[0.85rem] text-zinc-400 flex flex-row items-center gap-2">
          <CgBriefcase />
          {data.position}
        </p>
        <div className="text-[0.75rem] text-zinc-400 flex flex-row items-center gap-2">
          <IoIosTime />
          {data.startDate} - {data.endDate}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
