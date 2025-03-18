import { ReactNode } from "react";
import type { ModalProps } from "antd";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import i18n from "@/locales/i18n";

export interface IModalState extends ModalProps {
  isOpen?: boolean;
  type?: string;
  maskClosable?: boolean;
  title?: ReactNode | null;
  description?: ReactNode | null;

  okText?: string;
  cancelText?: string;

  actionConfirm?: (() => Promise<void> | void) | null;
  actionCancel?: (() => Promise<void> | void) | null;
  actionAfterClose?: (() => Promise<void> | void) | null;

  className?: string;
  titleClass?: string;
  descriptionClass?: string;
}

const initialState: IModalState = {
  isOpen: false,
  type: "info", // info, confirm
  maskClosable: false,

  title: null,
  description: null,

  okText: i18n.t("yes"),
  cancelText: i18n.t("cancel"),
  actionConfirm: () => {},
  actionCancel: () => {},
  actionAfterClose: () => {},

  className: undefined,
  titleClass: undefined,
  descriptionClass: undefined,
};

export const modalSlice = createSlice({
  name: "appModalReducer",
  initialState,
  reducers: {
    openAppModal: (state, action: PayloadAction<Partial<IModalState>>) => {
      /* Partial<IModalState> chuyển IModalState thành tùy chọn (optional), k cần truyền đủ */
      Object.assign(state, { isOpen: true, ...action.payload }); /* immer từ Redux Toolkit */
    },
    closeAppModal: () => initialState,
  },
});

export const { openAppModal, closeAppModal } = modalSlice.actions;
export const appModalReducer = modalSlice.reducer;
