import { languagesType } from "@/constant/types";
import Image from "next/image";
import React from "react";

type LanguageCardProps = React.FC<{
  data: languagesType;
}>;
const LanguageCard: LanguageCardProps = ({ data }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
      <div className="border border-zinc-900 flex flex-row items-center justify-start gap-3 rounded-full p-2 ">
        <div
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            objectFit="cover"
            fill
            alt={data.name}
            className="rounded-full"
            src={data.img}
          />
        </div>
        <div>
          <p className=" text-[0.75rem] mb-1">{data.name}</p>
          <p className=" text-[0.65rem] text-zinc-400 text-nowrap">
            {data.type}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LanguageCard;
