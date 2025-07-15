/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import {
  aiChatBotInfo,
  fullName,
  LOCALSTORAGE_KEYS,
  questions,
  SectionIds,
} from "@/constant/common";
import ChatInput from "./ChatSection";
import axiosInstance from "@/utils/axios";
import { useRouter } from "next/router";
import { toast } from "sonner";

const Hero = () => {
  const router = useRouter();
  const [question, setQuestion] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const handleChat = async () => {
    const handleError = () => {
      toast("Something went wrong!.Please try again");
      setIsCreating(false);
    };

    if (!question) {
      return toast(
        "Question is too short. Please try again with a little longer question."
      );
    }
    if (question.length > 100) {
      return toast(
        "Question is too long. Please try again with a shorter question."
      );
    }

    try {
      setIsCreating(true);
      const { data } = await axiosInstance.post("create", {
        question,
      });
      console.log("handleMessageData", data);
      if (data.isError && !data.data) {
        handleError();
      } else {
        const userDetails = data.data.userDetails;
        const messageDetails = data.data.message;
        localStorage.setItem(
          LOCALSTORAGE_KEYS.QUESTION,
          JSON.stringify(messageDetails)
        );
        router.push(`/chat/${userDetails.id}`);
      }
      setIsCreating(false);
    } catch (error) {
      handleError();
      console.error("Something went wrong in handleMessage due to", error);
    }
  };

  return (
    <section
      id={SectionIds.CHAT}
      className="min-h-[100vh] flex flex-col items-center justify-center"
    >
      <p className="text-center text-[1rem]">Hi,I am</p>
      <p className="text-center text-[2rem] md:text-[3rem] font-bold">
        {fullName}
      </p>
      <p className="text-center text-[0.75rem] w-full md:w-1/2">
        {aiChatBotInfo}
      </p>
      <ChatInput
        className="my-8 w-full md:w-8/12"
        text={question}
        setText={setQuestion}
        onClickSend={handleChat}
        disabled={isCreating}
      />
      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        {questions.map((m, i) => (
          <span
            onClick={() => {
              setQuestion(m);
            }}
            className="bg-zinc-800 cursor-pointer text-zinc-50 rounded-full text-[0.6rem] md:text-[0.75rem] px-2 py-1 m-0"
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
