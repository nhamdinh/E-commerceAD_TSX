import { Modal, Button } from "antd";
import { useAppSelector } from "@/store";
import { useAppModal } from "@/hooks";

export default function AppModal() {
  const { handleCloseAppModal } = useAppModal();

  const {
    open,
    children,
    onOk,
    onCancel,
    className,
    isOpen,
    type,
    maskClosable,
    title,
    content,
    confirmText,
    closeText,
    actionConfirm,
    actionCancel,
    actionAfterClose,
    ...props
  } = useAppSelector((state) => state.appModalReducer);

  const handleClose = () => {
    if (type === "info") {
      actionConfirm();
    }
    handleCloseAppModal();
  };

  const handleConfirm = () => {
    actionConfirm();
    handleCloseAppModal();
  };

  const handleCancel = () => {
    actionCancel();
    handleCloseAppModal();
  };
  const handleAfterClose = () => {
    actionAfterClose();
  };
  return (
    <>
      {/* <Modal
        transitionName=""
        title={title}
        className={className}
        open={open}
        onOk={onOk}
        onCancel={onCancel}
        {...props}
        centered
      >
        {children}
      </Modal> */}

      <Modal
        title=""
        open={isOpen}
        onCancel={handleClose}
        closable={false}
        okText="Confirm"
        cancelText="Cancel"
        footer={null}
        maskClosable={maskClosable}
        centered={true}
        className="custom-dialog"
        afterClose={handleAfterClose}
      >
        {type === "info" ? (
          <div className="dialog-info">
            <div className="content">{content}</div>
            <div className="footer" onClick={handleConfirm}>
              {confirmText}
            </div>
          </div>
        ) : type === "logout" ? (
          <div className="dialog-confirm-logout">
            <div className="body-wrapper">
              <div className="title">{title}</div>
              <div className="content">{content}</div>
            </div>
            <div className="row-wrapper">
              <div className="base-btn" onClick={handleCancel}>
                <div className="btn-text color-cancel">{closeText}</div>
              </div>
              <div className="base-btn" onClick={handleConfirm}>
                <div className="btn-text">{confirmText}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="dialog-confirm">
            <div className="title">{title}</div>
            <div className="content">{content}</div>
            <div className="btns">
              <Button className="bt-cancel" onClick={handleCancel}>
                {closeText}
              </Button>
              <Button className="bt-confirm" onClick={handleConfirm}>
                {confirmText}
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
