/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import {
  aiChatBotInfo,
  fullName,
  questions,
  SectionIds,
} from "@/constant/common";
import ChatInput from "./ChatSection";
import axiosInstance from "@/utils/axios";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  const [question, setQuestion] = useState("");

  const handleChat = async () => {
    try {
      const { data } = await axiosInstance.post("create", {
        question,
      });
      console.log("handleMessageData", data);
      if (data.isError && !data.data) {
      } else {
        router.push(`/chat/${data.data.id}`);
      }
    } catch (error) {
      console.error("Something went wrong in handleMessage due to", error);
    }
  };

  return (
    <section
      id={SectionIds.CHAT}
      className="min-h-[100vh] flex flex-col items-center justify-center"
    >
      <p className="text-center text-[1rem]">Hi,I am</p>
      <p className="text-center text-[3rem] font-bold">{fullName}</p>
      <p className="text-center text-[0.75rem] w-1/2">{aiChatBotInfo}</p>
      <ChatInput
        className="my-8"
        text={question}
        setText={setQuestion}
        onClickSend={handleChat}
      />
      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        {questions.map((m, i) => (
          <span
            onClick={() => {
              setQuestion(m);
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
