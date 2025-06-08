import { navData } from "@/constant/common";
import Link from "next/link";
import React from "react";
import DownloadResume from "../buttons/DownloadResume";

type MobileOverlayProps = React.FC<{
  close: () => void;
}>;
const MobileOverlay: MobileOverlayProps = ({ close }) => {
  return (
    <div className="fixed inset-0 bg-zinc-900 z-50 flex flex-col max-[399px]:flex hidden">
      <div className="flex justify-end p-4">
        <button
          onClick={close}
          className="p-2 text-white text-2xl"
          aria-label="Close mobile menu"
        >
          ×
        </button>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 gap-8">
        {navData.map((m, i) => (
          <Link
            href={m.href}
            key={i}
            onClick={close}
            className="text-xl text-white hover:text-gray-300 transition-colors"
          >
            {m.name}
          </Link>
        ))}

        <div className="mt-8">
          <DownloadResume />
        </div>
      </div>
    </div>
  );
};

export default MobileOverlay;
