import { navData } from "@/constant/common";
import React, { useEffect } from "react";
import DownloadResume from "../buttons/DownloadResume";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router]);

  return (
    <header className="flex flex-row w-3/6 items-center justify-between p-3 sticky top-0 rounded-full bg-zinc-900 px-3">
      <div className="flex flex-row gap-4 pl-4">
        {navData.map((m, i) => (
          <Link href={m.href} key={i} className="text-[0.75rem]">
            {m.name}
          </Link>
        ))}
      </div>
      <DownloadResume />
    </header>
  );
};

export default Navbar;
