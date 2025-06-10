import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

const LimitExceeded = () => {
  return (
    <div className="flex flex-row items-center justify-center border border-red-300 rounded-sm text-red-400 gap-2 p-2">
      <div>
        <FiAlertTriangle className="text-[1.5rem]" />
      </div>
      <div className="text-[0.7rem]">
        Hey, looks like we've hit the chat limit here! Feel free to shoot me a
        direct message on LinkedIn to keep the conversation going! 😊
      </div>
    </div>
  );
};

export default LimitExceeded;
