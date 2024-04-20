import Button from "@mui/material/Button";
import { useConfirmModal } from "@/shared/lib";
import { useAppDispatch } from "@/shared/model";
import { logoutThunk } from "../../model/logout";

type LogoutButtonProps = { onLogoutClick: VoidFunction };
export function LogoutButton({ onLogoutClick }: LogoutButtonProps) {
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
        onLogoutClick();
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
