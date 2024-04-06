import { type ElementType } from "react";
import { Navigate } from "react-router-dom";
import { selectUser } from "@/entities/user/model/slice";
import { useAppSelector } from "@/shared/model";
import { GuestGuard } from "@/app/guards/guest";

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

  const userRole = data?.role_id === 1 ? "producer" : "consumer";
  // Check if the user's role is allowed to access the route
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
