import Header from "@/components/ChatDetails/Header";
import Message from "@/components/ChatDetails/Message";
import ChatInput from "@/components/Hero/ChatSection";
import Navbar from "@/components/Layout/Navbar";
import RootLayout from "@/components/Layout/RootLayout";
import React, { useState } from "react";
import { MdInfoOutline } from "react-icons/md";

const dummyMessages = [
  {
    id: 1,
    isUser: true,
    message: "Who the hell are you?",
  },
  {
    id: 2,
    isUser: false,
    message: "I am Siddhesh Dabholkar's assistant. I'm here to help you.",
  },
  {
    id: 3,
    isUser: true,
    message: "What can you do?",
  },
  {
    id: 4,
    isUser: false,
    message:
      "I can answer questions, help with coding, and assist with anything Siddhesh needs.",
  },
  {
    id: 5,
    isUser: true,
    message: "Can you book a meeting for tomorrow?",
  },
  {
    id: 6,
    isUser: false,
    message: "Sure. What time should I schedule it for?",
  },
  {
    id: 7,
    isUser: true,
    message: "Let's do 11 AM.",
  },
  {
    id: 8,
    isUser: false,
    message: "Got it. Meeting scheduled for 11 AM tomorrow.",
  },
  {
    id: 4,
    isUser: false,
    message:
      "I can answer questions, help with coding, and assist with anything Siddhesh needs.",
  },
  {
    id: 5,
    isUser: true,
    message: "Can you book a meeting for tomorrow?",
  },
  {
    id: 6,
    isUser: false,
    message: "Sure. What time should I schedule it for?",
  },
  {
    id: 7,
    isUser: true,
    message: "Let's do 11 AM.",
  },
  {
    id: 8,
    isUser: false,
    message: "Got it. Meeting scheduled for 11 AM tomorrow.",
  },
  {
    id: 4,
    isUser: false,
    message:
      "I can answer questions, help with coding, and assist with anything Siddhesh needs.",
  },
  {
    id: 5,
    isUser: true,
    message: "Can you book a meeting for tomorrow?",
  },
  {
    id: 6,
    isUser: false,
    message: "Sure. What time should I schedule it for?",
  },
  {
    id: 7,
    isUser: true,
    message: "Let's do 11 AM.",
  },
  {
    id: 8,
    isUser: false,
    message: "Got it. Meeting scheduled for 11 AM tomorrow.",
  },
];

const ChatDetails = () => {
  const [question, setQuestion] = useState("");

  return (
    <RootLayout>
      <div className="w-full h-[97vh] flex flex-col items-center justify-between">
        <Navbar />
        <div className="overflow-y-scroll w-full p-2 scrollbar-hide my-2 md:w-8/12">
          {dummyMessages.map((m) => (
            <Message isBot={!m.isUser} message={m.message} />
          ))}
        </div>
        <footer className="w-full flex flex-col items-center">
          <ChatInput
            className="w-full md:w-8/12"
            text={question}
            setText={setQuestion}
            onClickSend={() => {}}
          />
          <div className="flex flex-row justify-center items-center gap-1 mt-2">
            <MdInfoOutline className="text-[0.75rem]" />
            <p className="text-[0.55rem] text-zinc-400 mt-1">
              chatbot can make mistake,proceed with caution
            </p>
          </div>
        </footer>
      </div>
    </RootLayout>
  );
};

export default ChatDetails;
