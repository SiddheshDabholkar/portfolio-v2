import React from "react";

type SectionNameProps = React.FC<{
  text: string;
}>;

const SectionName: SectionNameProps = ({ text }) => {
  return (
    <div className="flex flex-row w-full items-center justify-center">
      <div className="flex flex-row items-center border border-zinc-500 px-3  rounded-full justify-center w-max text-center text-[0.75rem] my-4 hover:bg-zinc-900 hover:text-white transition-colors duration-300 ease-in-out">
        {text}
      </div>
    </div>
  );
};

export default SectionName;
