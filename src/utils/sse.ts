import { NextApiResponse } from "next";
import { FormatResponse } from "./response";

type sseProps = {
  res: NextApiResponse;
  stopIt: boolean;
  message: string;
  isError: boolean;
  data: any;
};

const sse = ({
  res,
  message,
  data,
  stopIt = true,
  isError = true,
}: sseProps) => {
  const stringified = JSON.stringify(
    FormatResponse({
      data,
      isError,
      message,
    })
  );
  res.write(`${stringified}\n\n`);
  if (stopIt) {
    res.end();
  }
};

export { sse };
