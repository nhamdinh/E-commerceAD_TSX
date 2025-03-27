import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import userApi from "@/services/user.service";
import { API_REDUCER_KEY, baseApi } from "@/services/api.service";
import {
  appModalReducer,
  modalSlice,
  authReducer,
  authSlice,
  toastSlice,
  toastReducer,
} from "@/store/slice";

const rootReducer = {
  [API_REDUCER_KEY]: baseApi.reducer,
  [modalSlice.name]: appModalReducer,
  [authSlice.name]: authReducer,
  [toastSlice.name]: toastReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([userApi.middleware]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
