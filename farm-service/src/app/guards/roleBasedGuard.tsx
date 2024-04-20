import { Box, CircularProgress } from "@mui/material";
import { type ElementType } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { GuestGuard } from "@/app/guards/guest";
import { useMeQuery } from "@/entities/user";
import { selectUser } from "@/entities/user/model/slice";
import { useAppSelector } from "@/shared/model";

type Props = {
  allowedRoles: Array<"producer" | "consumer">;
  component: ElementType;
};

export const RoleBasedGuard = ({
  allowedRoles,
  component: Component,
  ...rest
}: Props) => {
  const { isLoading, isFetching } = useMeQuery();

  const { role_id } = useAppSelector(selectUser) || {};
  const userRoleValue = role_id === 1 ? "producer" : "consumer";

  const { userRole } = useParams();

  const location = useLocation();
  const pathAfterRole = location.pathname.split(`/${userRole}/`)[1];

  const isAllowed = allowedRoles.includes(userRoleValue);

  if (isLoading || isFetching) {
    return (
      <Box
        display="flex"
        height={"80vh"}
        alignItems={"center"}
        justifyContent="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!isAllowed) {
    return <Navigate to="/" />; // Redirect to home page if user's role is not allowed
  }

  if (userRole && userRoleValue !== userRole) {
    return <Navigate to={`/${userRoleValue}/${pathAfterRole}`} />;
  }

  return (
    <GuestGuard>
      <Component {...rest} />
    </GuestGuard>
  );
};
