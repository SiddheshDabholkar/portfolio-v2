import { languagesType } from "@/constant/types";
import React from "react";

type LanguageCardProps = React.FC<{
  data: languagesType;
}>;
const LanguageCard: LanguageCardProps = ({ data }) => {
  return (
    <div className="border border-zinc-700 w-2/12 rounded-xl p-2 px-4">
      <p className=" text-[0.75rem] mb-1">{data.name}</p>
      <p className=" text-[0.6rem] text-zinc-400">{data.type}</p>
    </div>
  );
};

export default LanguageCard;
