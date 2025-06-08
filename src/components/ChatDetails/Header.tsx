import Link from "next/link";
import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex flex-row w-full items-center justify-between">
      <Link href="/" className="flex flex-row items-center gap-1">
        <IoArrowBack />
        <p className="text-[0.75rem] mb-0">Home</p>
      </Link>
      <button className="border flex flex-row items-center gap-2 rounded-xl  p-2 border-zinc-200">
        <IoAddCircleOutline />
        <p className="text-[0.65rem]">New Chat</p>
      </button>
    </div>
  );
};

export default Header;
