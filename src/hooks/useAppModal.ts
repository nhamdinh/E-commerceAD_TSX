import { useCallback } from "react";
import { useAppDispatch } from "@/store";
import { ModalStateType, closeAppModal, openAppModal, releaseAppModalState } from "@/store/slice";

export const useAppModal = () => {
  const dispatch = useAppDispatch();

  const handleOpenAppModal = useCallback(
    (data: Omit<ModalStateType, "open">) => {
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
