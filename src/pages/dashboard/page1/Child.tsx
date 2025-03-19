import { memo } from "react";

export const Child = memo(({ onClick }: any) => {
  console.log("Child");
  return <h1 onClick={onClick}> zzzzzzzzz</h1>;
});
