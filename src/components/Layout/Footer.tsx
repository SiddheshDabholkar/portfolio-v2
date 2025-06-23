import { fullName } from "@/constant/common";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-t-zinc-800 w-full p-4">
      <p className="text-end text-[0.8rem] md:text-[0.85rem]">{fullName}</p>
      <p className="text-end text-zinc-500 text-[0.75rem]">
        last updated at : 24 June 2001
      </p>
    </footer>
  );
};

export default Footer;
