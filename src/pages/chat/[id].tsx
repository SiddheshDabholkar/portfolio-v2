import LimitExceeded from "@/components/ChatDetails/LimitExceeded";
import Message from "@/components/ChatDetails/Message";
import ChatInput from "@/components/Hero/ChatSection";
import Navbar from "@/components/Layout/Navbar";
import RootLayout from "@/components/Layout/RootLayout";
import { LOCALSTORAGE_KEYS } from "@/constant/common";
import axiosInstance from "@/utils/axios";
import { getParsed } from "@/utils/common";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { MdInfoOutline } from "react-icons/md";
import { toast } from "sonner";

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
  const [isLimitExceeded, setIsLimitExceeded] = useState(false);
  const messagesCont = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesCont.current) {
      messagesCont.current.scrollTop = messagesCont.current.scrollHeight;
    }
  };

  const handleMessage = async () => {
    const handleError = () => {
      toast("Something went wrong!.Please try again");
      setIsSending(false);
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
      setIsSending(true);
      setMessages((prev) => [
        ...prev,
        {
          id: "",
          question,
          answer: "",
        },
      ]);
      scrollToBottom();
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
        scrollToBottom();
      } else {
        handleError();
      }
      setIsSending(false);
    } catch (error) {
      handleError();
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
    const limitExceededLocal = Boolean(
      localStorage.getItem(LOCALSTORAGE_KEYS.LIMIT_EXCEEDED)
    );
    setIsLimitExceeded(limitExceededLocal);
  }, []);

  return (
    <RootLayout>
      <div className="w-full h-[97vh] flex flex-col items-center justify-between">
        <Navbar />
        <div className="flex flex-col overflow-hidden h-full w-full justify-end p-2 scrollbar-hide my-2 md:w-8/12">
          <div
            className="flex flex-col overflow-y-scroll scrollbar-hide w-full h-full "
            ref={messagesCont}
          >
            {messages.map((m) => (
              <div className="w-full flex flex-col">
                <Message isBot={false} message={m.question} />
                <Message
                  id={m.id}
                  isBot
                  userId={id}
                  message={m?.answer ?? ""}
                  onLimitExceed={() => {
                    console.log("onLimitExceed called");
                    localStorage.setItem(
                      LOCALSTORAGE_KEYS.LIMIT_EXCEEDED,
                      "true"
                    );
                    setIsLimitExceeded(true);
                  }}
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
              </div>
            ))}
            {isLimitExceeded && <LimitExceeded />}
          </div>
        </div>
        <footer className="w-full flex flex-col items-center">
          <ChatInput
            className="w-full md:w-8/12"
            text={question}
            setText={setQuestion}
            onClickSend={handleMessage}
            disabled={isSending || isLimitExceeded}
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
