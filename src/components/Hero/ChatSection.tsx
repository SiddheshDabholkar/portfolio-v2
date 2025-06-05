import React, { useState } from "react";
import Send from "../buttons/Send";
import CustomRichTextEditor from "../ChatInput";

type ChatSectionProps = React.FC<{
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}>;

const ChatSection: ChatSectionProps = ({ text, setText }) => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    try {
    } catch (error) {
      console.error("Something went wrong in handleSendMessage due to ", error);
    }
  };

  return (
    <>
      <div className="bg-zinc-800 rounded-2xl p-3 w-8/12 my-8">
        <CustomRichTextEditor value={text} setValue={setText} />
        <div className="flex flex-row items-center justify-end">
          <Send
            onClick={() => {
              handleSendMessage();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ChatSection;
