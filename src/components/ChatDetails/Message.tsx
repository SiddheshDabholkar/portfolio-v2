import { NEXT_PUBLIC_API_URL } from "@/constant/envs";
import { SSE } from "@/constant/messages";
import React, { useEffect, useMemo, useState } from "react";
import Markdown from "react-markdown";

type MessageProps = React.FC<{
  isBot: boolean;
  message: string;
  id?: string;
  onMessageUpdate?: (message: string) => void;
}>;
const Message: MessageProps = ({ id, isBot, message, onMessageUpdate }) => {
  const [localMessage, setLocalMessage] = useState(message ?? "");

  useEffect(() => {
    setLocalMessage(message);
  }, [message]);

  useEffect(() => {
    if (id && !localMessage) {
      const eventSource = new EventSource(
        `${NEXT_PUBLIC_API_URL}message/${id}`
      );
      eventSource.onmessage = (e) => {
        const serverText = e.data;
        const parsedData = JSON.parse(serverText);
        const { data, isError, message } = parsedData;
        if (isError) {
          eventSource.close();
        } else {
          if (message === SSE.COMPLETED) {
            eventSource.close();
          } else if (message === SSE.FAILED) {
            eventSource.close();
          } else {
            onMessageUpdate && onMessageUpdate(data);
          }
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, localMessage]);

  const cardClassName = useMemo(() => {
    if (isBot) {
      return "w-full bg-zinc-950";
    }
    return "max-w-10/12  md:max-w-6/12 bg-zinc-900";
  }, [isBot]);

  return (
    <div className="w-full mb-4 flex flex-row items-center justify-end">
      <div
        className={`${cardClassName} p-3 rounded-xl ${
          isBot && "markdown-control"
        }`}
      >
        {isBot ? (
          <Markdown>{message}</Markdown>
        ) : (
          <p className="text-[0.8rem]">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Message;
