import { useCallback } from "react";
import { useAppDispatch } from "@/store";
import {
  IModalState,
  releaseAppModalState,
  openAppModal,
  closeAppModal,
} from "@/modules/Shared/AppModal/appModal.slice";

export const useAppModal = () => {
  const dispatch = useAppDispatch();

  const handleOpenAppModal = useCallback(
    (data: Omit<IModalState, "open">) => {
      dispatch(openAppModal(data));
    },
    [dispatch]
  );

  const handleCloseAppModal = useCallback(() => {
    dispatch(closeAppModal());
  }, [dispatch]);

  const handleReleaseAppModalState = useCallback(() => {
    dispatch(releaseAppModalState());
  }, [dispatch]);

  return {
    handleOpenAppModal,
    handleCloseAppModal,
    handleReleaseAppModalState,
  };
};
