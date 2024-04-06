import Button from "@mui/material/Button";
import { useConfirmModal } from "@/shared/lib";
import { useAppDispatch } from "@/shared/model";
import { logoutThunk } from "../../model/logout";

export function LogoutButton() {
  const dispatch = useAppDispatch();
  const logoutModal = useConfirmModal();

  const onConfirmLogout = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    e.preventDefault();

    logoutModal.show({
      title: "Are you sure?",
      onConfirm: () => {
        dispatch(logoutThunk())
          .unwrap()
          .finally(() => {
            logoutModal.remove();
          });
      },
      onCancel: () => logoutModal.remove(),
    });
  };

  return (
    <Button color={"error"} variant="contained" onClick={onConfirmLogout}>
      logout
    </Button>
  );
}
