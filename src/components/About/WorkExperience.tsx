import { experiences } from "@/constant/about";
import { experiencesType } from "@/constant/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { LuLinkedin } from "react-icons/lu";
import { GiEarthAmerica } from "react-icons/gi";

const WorkExperience = () => {
  return (
    <div className="flex flex-col md:flex-row  rounded-2xl p-4 gap-4">
      <div className="w-full md:w-4/12 p-4 md:p-2 flex flex-col items-center justify-center rounded-xl text-center bg-gradient-to-r from-zinc-800 to-zinc-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[40px] w-[40px] md:h-[90px] md:w-[90px]"
          height="90"
          width="90"
          viewBox="0 0 32 32"
        >
          <path
            d="M20 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5m.5 2.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1m0 2h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1m0 2h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1M16 18v-6a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v6h-1v-4a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4H8v-5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v5h-.5a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zm-9 0H6v-5h1zm4 0h-1v-4h1zm4 0h-1v-6h1zM29 4H3a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h9v3h-1.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1H20v-3h9a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3M19 29h-6v-3h6zm12-6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2z"
            fill="#fff"
          />
        </svg>
        <p className="text-[0.95rem] md:text-[1.35rem]">Work experience</p>
      </div>
      <div className="w-full md:w-8/12  gap-4 flex flex-col">
        {experiences.map((m) => (
          <WorkCard data={m} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;

type WorkCardProps = React.FC<{
  data: experiencesType;
}>;
const WorkCard: WorkCardProps = ({ data }) => {
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
        <h2 className="font-bold text-[1rem]">{data.name}</h2>
        <p className="text-zinc-400 text-[0.95rem]">{data.position}</p>
        <p className="text-zinc-400 text-[0.75rem]">
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
