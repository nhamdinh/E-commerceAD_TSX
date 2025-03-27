import { memo } from "react";

const LoadingApi = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border text-success"
        role="status"
        style={{ width: "50px", height: "50px" }}
      >
        <span className="sr-only">LoadingApi...</span>
      </div>
    </div>
  );
};

export default memo(LoadingApi);
