/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import CustomRichTextEditor from "../ChatInput";
import Send from "../buttons/Send";
import { questions } from "@/constant/common";

const Hero = () => {
  const [text, setText] = useState("");

  return (
    <section className="min-h-[100vh] flex flex-col items-center justify-center">
      <p className="text-center text-[1rem]">Hi,I am</p>
      <p className="text-center text-[3rem] font-bold">Siddhesh Dabholkar</p>
      <p className="text-center text-[0.75rem] w-1/2">
        Hi! I'm Siddhesh's AI assistant. Ask about my skills, projects,
        education, or scroll for details!
      </p>

      <div className="bg-zinc-800 rounded-2xl p-3 w-8/12 my-8">
        <CustomRichTextEditor value={text} setValue={setText} />
        <div className="flex flex-row items-center justify-end">
          <Send />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        {questions.map((m, i) => (
          <span
            onClick={() => {
              setText(m);
            }}
            className="bg-zinc-800 cursor-pointer text-zinc-50 rounded-full text-[0.75rem] px-2 py-1 m-0"
            key={i}
          >
            {m}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
