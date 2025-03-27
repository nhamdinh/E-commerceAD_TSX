import { toast, ToastContent } from "react-toastify";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { _ToastOptions, ToastType } from "@/utils";
import { useAppSelector } from "@/store";
import { getToastReducer } from "@/store/selector/RootSelector";

const toastTypeObj = {
  success: "Thành công! 🎉",
  error: "Có lỗi xảy ra! ❌",
  warning: "Cảnh báo! ⚠️",
  info: "Thông tin mới! ℹ️",
} as const; // `as const` giúp các giá trị không thể thay đổi

const Toast = () => {
  const isOpenToast = useAppSelector(getToastReducer)?.isOpenToast;
  const toastType: ToastType = useAppSelector(getToastReducer)?.toastType;
  const content: ToastContent = useAppSelector(getToastReducer)?.content;
  useEffect(() => {
    // toast.dismiss();// clear all old toast
    if (isOpenToast && toast[toastType])
      toast[toastType](content ?? toastTypeObj[toastType], _ToastOptions);
  }, [isOpenToast]);

  return (
    <>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
    </>
  );
};

export default Toast;
