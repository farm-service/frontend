import { useModal, create as createModal } from "@ebay/nice-modal-react";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useCallback, useEffect, useState } from "react";

type Props = {
  title: string;
  onConfirm: VoidFunction;
  onCancel: VoidFunction;
  confirmText?: string;
  cancelText?: string;
};

function ConfirmModalPresenter(props: Props) {
  const {
    title,
    onConfirm,
    onCancel,
    confirmText = "Yes",
    cancelText = "No",
  } = props;

  const [open, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const onConfirmHandler = useCallback(() => {
    onConfirm();
    setIsOpen(false);
  }, []);

  const onCancelHandler = useCallback(() => {
    setIsOpen(false);
    onCancel();
  }, [onCancel]);

  return (
    <Modal
      open={open}
      onClose={() => setIsOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box bgcolor={"#fff"} display={"flex"} justifyContent={"center"}>
        <span className="text_base text_bold">{title}</span>
        <Button onClick={onConfirmHandler}>{confirmText}</Button>
        <Button onClick={onCancelHandler}>{cancelText}</Button>
      </Box>
    </Modal>
  );
}

export const ConfirmModal = createModal(ConfirmModalPresenter);

export const useConfirmModal = () => {
  return useModal(ConfirmModal);
};
