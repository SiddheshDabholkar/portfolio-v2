import { fullName } from "@/constant/common";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-t-zinc-800 w-full p-4">
      <p className="text-end">{fullName}</p>
      <p className="text-end text-zinc-500 text-[12px]">
        last updated at : 22 may 2001
      </p>
    </footer>
  );
};

export default Footer;
