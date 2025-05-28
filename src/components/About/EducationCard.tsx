import { educationType } from "@/constant/types";
import React from "react";

type EducationCardProps = React.FC<{
  data: educationType;
}>;
const EducationCard: EducationCardProps = ({ data }) => {
  return (
    <div className="border border-zinc-700 w-max rounded-xl p-3">
      <p className="text-[0.85rem] mb-2">{data.title}</p>
      <p className="text-[0.65rem] mb-1">{data.location}</p>
      <div className="text-[0.65rem]">
        {data.startYear} - {data.endYear}
      </div>
    </div>
  );
};

export default EducationCard;
