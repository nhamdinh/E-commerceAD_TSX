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
};

export const modalSlice = createSlice({
  name: "appModalReducer",
  initialState,
  reducers: {
    openAppModal: (state, action: PayloadAction<IModalState>) => {
      const {
        type,
        maskClosable,
        title,
        description,
        okText,
        cancelText,
        actionConfirm,
        actionCancel,
        actionAfterClose,
        className,
        titleClass,
        descriptionClass,
      } = action.payload;
      state.isOpen = true;
      state.type = type ?? initialState.type;
      state.maskClosable = maskClosable;

      state.title = title ?? initialState.title;
      state.description = description ?? initialState.description;
      state.okText = okText ?? initialState.okText;
      state.cancelText = cancelText ?? initialState.cancelText;
      state.actionConfirm = actionConfirm ?? initialState.actionConfirm;
      state.actionCancel = actionCancel ?? initialState.actionCancel;
      state.actionAfterClose = actionAfterClose ?? initialState.actionAfterClose;
      state.className = className ?? initialState.className;
      state.titleClass = titleClass ?? initialState.titleClass;
      state.descriptionClass = descriptionClass ?? initialState.descriptionClass;
    },
    closeAppModal() {
      return initialState;
    },
  },
});

export const { openAppModal, closeAppModal } = modalSlice.actions;
export const appModalReducer = modalSlice.reducer;
