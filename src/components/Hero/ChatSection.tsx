import React from "react";
import Send from "../buttons/Send";
import CustomRichTextEditor from "../ChatInput";

type ChatInputProps = React.FC<
  {
    text: string;
    onClickSend: () => void;
    setText: React.Dispatch<React.SetStateAction<string>>;
  } & React.HTMLAttributes<HTMLDivElement>
>;

const ChatInput: ChatInputProps = ({
  text,
  setText,
  className,
  onClickSend,
  ...props
}) => {
  return (
    <>
      <div
        {...props}
        className={`bg-zinc-800 rounded-2xl p-3 w-8/12 ${className}`}
      >
        <CustomRichTextEditor value={text} setValue={setText} />
        <div className="flex flex-row items-center justify-end">
          <Send
            onClick={() => {
              onClickSend();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ChatInput;
