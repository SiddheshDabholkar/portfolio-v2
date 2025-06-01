import React from "react";

type SectionNameProps = React.FC<{
  text: string;
}>;

const SectionName: SectionNameProps = ({ text }) => {
  return (
    <div className="flex flex-row items-center justify-center text-center text-[1rem] my-4">
      {text}
    </div>
  );
};

export default SectionName;
