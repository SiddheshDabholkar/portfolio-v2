import { experiencesType } from "@/constant/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { GiEarthAmerica } from "react-icons/gi";
import { LuLinkedin } from "react-icons/lu";

type WorkCardProps = React.FC<{
  data: experiencesType;
}>;
const WorkCard: WorkCardProps = ({ data }) => {
  console.log("workCard", data);
  return (
    <div className="flex flex-col md:flex-row p-3 gap-4  rounded-xl border border-zinc-900">
      <div className="h-full gap-2 flex flex-row md:items-center justify-center w-full md:w-[120px] p-4 relative bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-sm">
        <Image
          height={70}
          width={70}
          alt={data.name}
          className="rounded-sm"
          src={data.img}
        />
      </div>
      <div>
        <h2 className="font-bold text-[0.9rem]">{data.name}</h2>
        <p className="text-zinc-400 text-[0.85rem]">{data.position}</p>
        <p className="text-zinc-400 text-[0.7rem]">
          {data.startDate} - {data.endDate}
        </p>
        <div className="mt-1 flex flex-row gap-2">
          <CompanyLinkedIn url={data.linkedInUrl} icon={LuLinkedin} />
          <CompanyLinkedIn url={data.companyUrl} icon={GiEarthAmerica} />
        </div>
      </div>
    </div>
  );
};

type CompanyLinkedInProps = React.FC<{
  url: string;
  icon: IconType;
}>;
const CompanyLinkedIn: CompanyLinkedInProps = ({ url, icon }) => {
  const Icon = icon;
  return (
    <Link href={url} target="_blank">
      <span className="flex flex-row h-[35px] w-[35px] p-2 items-center justify-center rounded-full bg-zinc-800">
        <Icon className="text-[1.25rem]" />
      </span>
    </Link>
  );
};

export default WorkCard;
