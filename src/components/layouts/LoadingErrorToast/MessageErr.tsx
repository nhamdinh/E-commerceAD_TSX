type MessageProps = {
  mess?: any;
  variant?: string;
  messText?: string;
};

const MessageErr = ({ variant = "alert-info", mess, messText }: MessageProps) => {
  if (messText) {
    return <div className={`alert ${variant}`}>{messText}</div>;
  }
  return (
    <div className={`alert ${variant}`}>{mess?.data?.message ?? "500 Internal Server Error"}</div>
  );
};

export default MessageErr;
