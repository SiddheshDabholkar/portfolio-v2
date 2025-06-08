import React, { useMemo } from "react";

type MessageProps = React.FC<{
  isBot: boolean;
  message: string;
}>;
const Message: MessageProps = ({ isBot, message }) => {
  const cardClassName = useMemo(() => {
    if (isBot) {
      return "w-full bg-zinc-950";
    }
    return "w-10/12  md:w-6/12 bg-zinc-900";
  }, [isBot]);

  return (
    <div className="w-full mb-4 flex flex-row items-center justify-end">
      <div className={`${cardClassName} p-3 rounded-xl`}>
        <p className="text-[0.8rem] mb-2">{message}</p>
        {!isBot && <p className="text-[0.5rem]">{new Date().toDateString()}</p>}
      </div>
    </div>
  );
};

export default Message;
