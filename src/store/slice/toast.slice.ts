import { ToastType } from "@/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToastContent } from "react-toastify";

interface ToastModalStateType {
  isOpenToast: any;
  content: ToastContent;
  toastType: ToastType;
}

const initialState: ToastModalStateType = {
  isOpenToast: undefined,
  content: undefined,
  toastType: "info",
};

export const toastSlice = createSlice({
  name: "toastReducer",
  initialState,
  reducers: {
    openToast: (
      state: ToastModalStateType,
      action: PayloadAction<Partial<ToastModalStateType>>
    ) => {
      Object.assign(state, {
        isOpenToast: Date.now(),
        ...action.payload,
      }); /* immer từ Redux Toolkit */
    },
  },
});

export const { openToast } = toastSlice.actions;
export const toastReducer = toastSlice.reducer;
