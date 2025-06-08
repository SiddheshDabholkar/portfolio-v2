import { experiencesType } from "@/constant/types";
import Link from "next/link";
import React from "react";

type ExperienceCardProps = React.FC<{
  data: experiencesType;
}>;
const ExperienceCard: ExperienceCardProps = ({ data }) => {
  return (
    <div className="border border-zinc-700 rounded-xl w-full md:w-1/3 p-3">
      <Link href={data.linkedInUrl} className="flex flex-col">
        <p className="text-[0.85rem] mb-2">{data.name}</p>
        <p className="text-[0.65rem] mb-1">{data.location}</p>
        <div className="text-[0.65rem]">
          {data.startDate} - {data.endDate}
        </div>
      </Link>
    </div>
  );
};

export default ExperienceCard;
