import { type ElementType } from "react";
import { Navigate } from "react-router-dom";
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
  const data = useAppSelector(selectUser);

  useMeQuery();

  const userRole = data?.role_id === 1 ? "producer" : "consumer";
  const isAllowed = allowedRoles.includes(userRole);

  return (
    <GuestGuard>
      {isAllowed ? (
        <Component {...rest} />
      ) : (
        <Navigate to="/" /> // Redirect to home page if user's role is not allowed
      )}
    </GuestGuard>
  );
};
