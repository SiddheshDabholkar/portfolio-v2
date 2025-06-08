type FormatResponseProps = {
  data: any;
  isError: boolean;
  message: string;
};
const FormatResponse = ({ data, isError, message }: FormatResponseProps) => {
  return {
    data,
    isError,
    message,
  };
};

export { FormatResponse };
