import Header from "@/components/ChatDetails/Header";
import Message from "@/components/ChatDetails/Message";
import ChatInput from "@/components/Hero/ChatSection";
import Navbar from "@/components/Layout/Navbar";
import RootLayout from "@/components/Layout/RootLayout";
import { LOCALSTORAGE_KEYS } from "@/constant/common";
import axiosInstance from "@/utils/axios";
import { getParsed } from "@/utils/common";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdInfoOutline } from "react-icons/md";

type SingleMessageType = {
  id: string;
  question: string;
  answer: string;
};

const ChatDetails = () => {
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState<SingleMessageType[]>([]);
  const params = useParams<{
    id: string;
  }>();
  const id = params?.id;

  const [question, setQuestion] = useState("");

  const handleMessage = async () => {
    try {
      setIsSending(true);
      setMessages((prev) => [
        ...prev,
        {
          id: "",
          question,
          answer: "",
        },
      ]);
      const { data } = await axiosInstance.post(
        "create-message",
        {
          question,
        },
        {
          headers: {
            userid: id,
          },
        }
      );
      if (data?.data && !data?.isError) {
        setQuestion("");
        setMessages((prev) =>
          prev.map((m, i) => {
            if (i === prev.length - 1) {
              return data?.data;
            }
            return m;
          })
        );
      } else {
      }
      setIsSending(false);
    } catch (error) {
      setIsSending(false);
      console.error("Something went wrong in handleMessage due to", error);
    }
  };

  useEffect(() => {
    const localMessage = localStorage.getItem(LOCALSTORAGE_KEYS.QUESTION);
    const parsedLocalMessage = getParsed(localMessage);
    if (parsedLocalMessage) {
      setMessages([parsedLocalMessage]);
      localStorage.removeItem(LOCALSTORAGE_KEYS.QUESTION);
    }
  }, []);

  return (
    <RootLayout>
      <div className="w-full h-[97vh] flex flex-col items-center justify-between">
        <Navbar />
        <div className="flex flex-col overflow-y-scroll h-full w-full justify-end p-2 scrollbar-hide my-2 md:w-8/12">
          {messages.map((m) => (
            <>
              <Message isBot={false} message={m.question} />
              <Message
                id={m.id}
                isBot
                message={m?.answer ?? ""}
                onMessageUpdate={(mess) => {
                  setMessages((prev) =>
                    prev.map((m, i) => {
                      if (i === prev.length - 1) {
                        const sanitizedAnswer = m?.answer ?? "";
                        return {
                          ...m,
                          answer: sanitizedAnswer + mess,
                        };
                      }
                      return m;
                    })
                  );
                }}
              />
            </>
          ))}
        </div>
        <footer className="w-full flex flex-col items-center">
          <ChatInput
            className="w-full md:w-8/12"
            text={question}
            setText={setQuestion}
            onClickSend={handleMessage}
            disabled={isSending}
          />
          <div className="flex flex-row justify-center items-center gap-1 mt-2">
            <MdInfoOutline className="text-[0.75rem]" />
            <p className="text-[0.65rem] text-zinc-400 mt-1">
              chatbot can make mistake,proceed with caution
            </p>
          </div>
        </footer>
      </div>
    </RootLayout>
  );
};

export default ChatDetails;
