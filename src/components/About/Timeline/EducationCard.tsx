import { educationType } from "@/constant/types";
import Image from "next/image";
import React from "react";

type EducationCardProps = React.FC<{
  data: educationType;
}>;
const EducationCard: EducationCardProps = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row p-3 gap-4  rounded-xl border border-zinc-900">
      <div className="h-full gap-2 flex flex-row md:items-center justify-center w-full md:w-[120px] p-4 relative bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-sm">
        <div
          className="rounded-sm"
          style={{
            height: 70,
            width: 70,
            background: "#fff",
          }}
        >
          <Image
            height={70}
            width={70}
            alt={data.title}
            className="rounded-sm"
            src={data.img}
          />
        </div>
      </div>
      <div>
        <h2 className="font-bold text-[0.9rem]">{data.title}</h2>
        <p className="text-zinc-400 text-[0.85rem]">{data.degree}</p>
        <p className="text-zinc-400 text-[0.75rem]">{data.location}</p>
        <p className="text-zinc-400 text-[0.70rem]">
          {data.startYear} - {data.endYear}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
