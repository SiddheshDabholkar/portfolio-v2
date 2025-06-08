import React from "react";

const DownloadResume = () => {
  return (
    <a target="_blank" href="resume.pdf">
      <button className="flex cursor-pointer flex-row gap-2 items-center text-[0.65rem] md:text-[0.75rem] bg-zinc-200 rounded-full py-2 px-4 text-zinc-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 15V3" />
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <path d="m7 10 5 5 5-5" />
        </svg>
        Resume
      </button>
    </a>
  );
};

export default DownloadResume;
