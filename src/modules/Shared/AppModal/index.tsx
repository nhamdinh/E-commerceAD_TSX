import { Modal, Button } from "antd";
import { useAppSelector } from "@/store";
import { useAppModal } from "@/hooks";

interface CustomModalProps {
  isOpen: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
  handleCancel?: () => void;
  handleAfterClose?: () => void;
  type?: "info" | "logout" | "confirm";
  title?: string;
  description?: string;
  okText?: string;
  cancelText?: string;
  closable?: boolean;
  maskClosable?: boolean;
}
export default function AppModal() {
  const { handleReleaseAppModalState, handleCloseAppModal } = useAppModal();

  const {
    children,
    className,
    isOpen,
    type,
    maskClosable,
    closable,
    title,
    description,
    okText,
    cancelText,
    actionConfirm,
    actionCancel,
    actionAfterClose,
    ...props
  } = useAppSelector((state) => state.appModalReducer);

  const handleClose = async () => {
    if (type === "info" && actionConfirm) await actionConfirm();
    await handleCloseAppModal();
  };

  const handleConfirm = async () => {
    if (actionConfirm) await actionConfirm();
    await handleCloseAppModal();
  };

  const handleCancel = async () => {
    if (actionCancel) await actionCancel();
    await handleCloseAppModal();
  };

  const handleAfterClose = async () => {
    if (actionAfterClose) await actionAfterClose();
    await handleReleaseAppModalState();
  };

  const renderDialogContent = () => {
    switch (type) {
      case "info":
        return (
          <div className="dialog-info">
            <div className="description">{description}</div>
            <div className="footer" onClick={handleConfirm}>
              {okText}
            </div>
          </div>
        );

      case "logout":
        return (
          <div className="dialog-confirm-logout">
            <div className="body-wrapper">
              <div className="title">{title}</div>
              <div className="description">{description}</div>
            </div>
            <div className="row-wrapper">
              <div className="base-btn" onClick={handleCancel}>
                <div className="btn-text color-cancel">{cancelText}</div>
              </div>
              <div className="base-btn" onClick={handleConfirm}>
                <div className="btn-text">{okText}</div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="dialog-confirm">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            <div className="btns">
              <Button className="bt-cancel" onClick={handleCancel}>
                {cancelText}
              </Button>
              <Button className="bt-confirm" onClick={handleConfirm}>
                {okText}
              </Button>
            </div>
          </div>
        );
    }
  };
  return (
    <Modal
      title=""
      open={isOpen}
      onCancel={handleClose}
      closable={closable}
      maskClosable={maskClosable}
      okText={okText}
      cancelText={cancelText}
      footer={null}
      centered
      className="custom-dialog"
      afterClose={handleAfterClose}
    >
      {renderDialogContent()}
    </Modal>
  );
  {
    /* <Modal
      open={isOpen}
      onCancel={handleClose}
      title=''
      transitionName=''
      centered
      closeIcon={null}
      className={cn('w-fit p-1 pt-7 pb-4 text-center max-w-96', className)}
      footer={
        <footer className='flex flex-row items-center justify-between px-6 py-3 space-x-6 '>
          {!!onCancel && (
            <Button onClick={onCancel} type='default' className='w-full'>
              {cancelText}
            </Button>
          )}
          <Button onClick={handleSubmit} type='primary' className='w-full'>
            {okText}
          </Button>
        </footer>
      }
    >
      {!!title && (
        <div className={cn('text-base font-semibold text-gray-700 uppercase text-center', titleClass)}>{title}</div>
      )}
      {!!description && (
        <div className={cn('text-sm font-normal text-gray-700 mt-4 text-center', descriptionClass)}>{description}</div>
      )}
    </Modal> */
  }
}
