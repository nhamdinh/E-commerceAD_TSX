import { ReactNode } from "react";
import type { ModalProps } from "antd";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import i18n from "@/locales/i18n";
import { DialogType } from "@/utils";

export interface ModalStateType extends ModalProps {
  isOpen?: boolean;
  type?: DialogType;
  maskClosable?: boolean;
  closable?: boolean;
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

const initialState: ModalStateType = {
  isOpen: false,
  type: "info",
  maskClosable: true,
  closable: false,

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
    openAppModal: (state, action: PayloadAction<Partial<ModalStateType>>) => {
      /* Partial<ModalStateType> chuyển ModalStateType thành tùy chọn (optional), k cần truyền đủ */
      Object.assign(state, { isOpen: true, ...action.payload }); /* immer từ Redux Toolkit */
    },
    closeAppModal: (state) => Object.assign(state, { isOpen: false }),
    releaseAppModalState: () => initialState,
  },
});

export const { openAppModal, closeAppModal, releaseAppModalState } = modalSlice.actions;
export const appModalReducer = modalSlice.reducer;
