import { ReactNode } from "react";

export const Label = (label: ReactNode, { required }: { required: boolean }) => {
  return (
    <span className="text-sm">
      {label}
      {required && <span className="text-red-400 pl-1">*</span>}
    </span>
  );
};
