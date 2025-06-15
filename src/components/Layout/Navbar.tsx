import { navData } from "@/constant/common";
import React, { useEffect, useState } from "react";
import DownloadResume from "../buttons/DownloadResume";
import Link from "next/link";
import { useRouter } from "next/router";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileOverlay from "./MobileOverlay";

const Navbar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className="flex flex-row w-full md:w-3/6 items-center justify-between p-3 sticky top-2 rounded-full bg-zinc-900 px-3 "
        style={{ zIndex: 1000 }}
      >
        <div className="hidden min-[400px]:flex flex-row gap-3 md:gap-4 pl-4">
          {navData.map((m, i) => (
            <Link
              href={m.href}
              key={i}
              className="text-[0.65rem] md:text-[0.75rem]"
            >
              {m.name}
            </Link>
          ))}
        </div>

        <button
          onClick={toggleMobileMenu}
          className="max-[399px]:flex hidden flex-col gap-1 p-2 pl-4"
          aria-label="Toggle mobile menu"
        >
          <RxHamburgerMenu />
        </button>
        <DownloadResume />
      </header>

      {isMobileMenuOpen && <MobileOverlay close={toggleMobileMenu} />}
    </>
  );
};

export default Navbar;
