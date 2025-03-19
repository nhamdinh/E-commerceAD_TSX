import { useEventCallback } from "@/hooks";
import { Child } from "@/pages/dashboard/page1/Child";
import { DatePicker } from "antd";
import { useCallback, useState } from "react";


export default function Page1() {
  const [count, setCount] = useState(0);
  // Mỗi khi count thay đổi, handleClick KHÔNG bị tạo lại nhờ useEventCallback
  const handleClick = useEventCallback(() => {
    setCount( count => count+1)
    console.log(count);
  });

  // Mỗi khi count thay đổi, handleClick sẽ bị tạo lại
  // const handleClick = useCallback(() => {
  //   setCount( count => count+1)
  //   console.log(count);
  // }, [count]);

  return <Child onClick={handleClick} />;
}
