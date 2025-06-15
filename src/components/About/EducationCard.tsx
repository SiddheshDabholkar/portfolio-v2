import { educationType } from "@/constant/types";
import Image from "next/image";

type EducationCardProps = React.FC<{
  data: educationType;
}>;
const EducationCard: EducationCardProps = ({ data }) => {
  return (
    <div className="border border-zinc-700 flex flex-col sm:flex-row gap-2 w-full rounded-xl p-3 ">
      <div className="w-[80px]">
        <div className="h-[80px] w-[80px] overflow-hidden rounded-lg bg-gradient-to-r from-fuchsia-600 to-purple-600  p-[2px]">
          <div className="h-full w-full relative overflow-hidden rounded-lg bg-white">
            <Image objectFit="cover" fill alt={data.title} src={data.img} />
          </div>
        </div>
      </div>
      <div className="w-full">
        <p className="text-[1rem] sm:text-[0.9rem] mb-2 font-bold">
          {data.title}
        </p>
        <p className="text-[0.85rem] sm:text-[0.75rem] mb-1 text-zinc-400">
          {data.location}
        </p>
        <div className="text-[0.75rem] sm:text-[0.65rem] mb-1 text-zinc-400">
          {data.startYear} - {data.endYear}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
