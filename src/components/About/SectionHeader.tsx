import React from "react";

type SectionHeaderProps = React.FC<{
  text: string;
}>;
const SectionHeader: SectionHeaderProps = ({ text }) => {
  return <p className="text-[0.7rem] mb-2">{text}</p>;
};

export default SectionHeader;
