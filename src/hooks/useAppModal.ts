import { useCallback } from "react";
import { useAppDispatch } from "@/store";
import { IModalState, closeAppModal, openAppModal } from "@/modules/Shared/AppModal/appModal.slice";

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

  return {
    handleOpenAppModal,
    handleCloseAppModal,
  };
};
