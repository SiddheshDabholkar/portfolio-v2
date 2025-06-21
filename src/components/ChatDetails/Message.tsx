import { NEXT_PUBLIC_API_URL } from "@/constant/envs";
import { SSE } from "@/constant/messages";
import React, { useEffect, useMemo, useState } from "react";
import Markdown from "react-markdown";

type MessageProps = React.FC<{
  isBot: boolean;
  message: string;
  id?: string;
  userId?: string;
  onMessageUpdate?: (message: string) => void;
  onLimitExceed?: () => void;
  onFailure?: () => void;
}>;
const Message: MessageProps = ({
  id,
  isBot,
  message,
  onMessageUpdate,
  userId,
  onLimitExceed = () => {},
  onFailure = () => {},
}) => {
  const [localMessage, setLocalMessage] = useState(message ?? "");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setLocalMessage(message);
  }, [message]);

  useEffect(() => {
    const handleGetMessage = async () => {
      try {
        const response = await fetch(
          `${NEXT_PUBLIC_API_URL}message/${userId}/${id}`
        );
        const stream = response.body;
        const reader = stream?.getReader();
        const decoder = new TextDecoder();

        const handleError = () => {
          onFailure();
          setIsLoading(false);
          if (reader) {
            reader.releaseLock();
          }
        };

        if (reader) {
          try {
            while (true) {
              const { done, value } = await reader.read();
              if (done) {
                break;
              }
              const decodedValue = decoder.decode(value, { stream: true });
              const entries = decodedValue.trim().split("\n\n");
              setIsLoading(false);

              for (const entry of entries) {
                if (!entry.trim()) continue;

                try {
                  const parsedData = JSON.parse(entry);
                  const { data, isError, message } = parsedData;

                  if (isError || message === SSE.FAILED) {
                    reader.releaseLock();
                    handleError();
                    return;
                  }

                  if (message === SSE.LIMIT_EXCEEDED) {
                    reader.releaseLock();
                    onLimitExceed && onLimitExceed();
                    return;
                  }

                  if (message === SSE.COMPLETED) {
                    reader.releaseLock();
                    return;
                  }
                  onMessageUpdate && onMessageUpdate(data);
                } catch (err) {
                  handleError();
                  console.error("Parse error:", err, "Entry:", entry);
                }
              }
            }
          } catch (error) {
            console.error(error);
            handleError();
          } finally {
            handleError();
          }
        } else {
          onFailure();
        }
      } catch (error) {
        onFailure();
        setIsLoading(false);
        console.error(
          "Something went wrong in handleGetMessage due to ",
          error
        );
      }
    };

    if (id && userId && !localMessage) {
      handleGetMessage();
    }
  }, [id, localMessage, userId]);

  const cardClassName = useMemo(() => {
    if (isBot) {
      return "w-full bg-zinc-950";
    }
    return "max-w-10/12  md:max-w-6/12 bg-zinc-900";
  }, [isBot]);

  if (isBot && isLoading) {
    return (
      <div className=" rounded-lg shadow-md p-6 w-full">
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-zinc-800 rounded"></div>
          <div className="h-4 bg-zinc-800 rounded w-5/6"></div>
          <div className="h-4 bg-zinc-800 rounded w-4/6"></div>
        </div>
      </div>
    );
  }

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
