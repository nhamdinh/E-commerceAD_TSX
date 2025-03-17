import type { ModalProps } from "antd";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IModalState extends ModalProps {
  title: any;
  content: any;
  isOpen?: boolean;
  maskClosable?: boolean;

  confirmText?: string;
  closeText?: string;
  type?: string;

  actionConfirm?: any;
  actionCancel?: any;
  actionAfterClose?: any;
}

const initialState = {
  content: null,
  title: null,
  isOpen: false,
  maskClosable: false,

  confirmText: "OK",
  closeText: "CANCEL",
  type: "info", // info, confirm
  actionConfirm: () => {},
  actionCancel: () => {},
  actionAfterClose: () => {},
} as IModalState;

export const modalSlice = createSlice({
  name: "appModalReducer",
  initialState,
  reducers: {
    openAppModal: (state, action: PayloadAction<IModalState>) => {
      const {
        type,
        maskClosable,
        title,
        content,
        confirmText,
        closeText,
        actionConfirm,
        actionCancel,
        actionAfterClose,
      } = action.payload;
      state.isOpen = true;
      state.type = type ?? initialState.type;
      state.maskClosable = maskClosable;

      state.title = title ?? initialState.title;
      state.content = content ?? initialState.content;
      state.confirmText = confirmText ?? initialState.confirmText;
      state.closeText = closeText ?? initialState.closeText;
      state.actionConfirm = actionConfirm ?? initialState.actionConfirm;
      state.actionCancel = actionCancel ?? initialState.actionCancel;
      state.actionAfterClose = actionAfterClose ?? initialState.actionAfterClose;
    },
    closeAppModal() {
      return initialState;
    },
  },
});

export const { openAppModal, closeAppModal } = modalSlice.actions;
export const appModalReducer = modalSlice.reducer;
