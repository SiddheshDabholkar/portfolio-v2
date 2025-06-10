import React from "react";

type SendProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Send: React.FC<SendProps> = ({ disabled, ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled}
      aria-disabled={disabled}
      className="h-[40px] w-[40px] rounded-full bg-zinc-950 flex flex-row items-center justify-center cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
        <path d="M6 12h16" />
      </svg>
    </button>
  );
};

export default Send;
