import { Button } from "antd";
import { useAppModal } from "@/hooks";
import { useState } from "react";

export default function Page2() {
  const { handleOpenAppModal } = useAppModal();

  return (
    <div>
      <Button
        onClick={
          () =>
            handleOpenAppModal({
              type: "confirm", // info, confirm

              title: null,
              description: null,
              // okText: "OK",
              // cancelText: "CANCEL",
              descriptionClass: "text-center",
              actionConfirm: () => {},
              actionCancel: () => {},
              actionAfterClose: () => {},
            })
          // open({
          //   children: <div>test</div>,
          //   onCancel: () => {
          //     close();
          //   },
          //   onOk: () => {
          //     close();
          //     openConfirm({
          //       okText: 'ok',
          //       title: 'confirm',
          //       titleClass: 'text-center',
          //       description: 'test',
          //       descriptionClass: 'text-center',
          //       onOk: () => {
          //         closeConfirm();
          //       },
          //     });
          //   },
          // })
        }
      >
        OpenModal
      </Button>
    </div>
  );
}
