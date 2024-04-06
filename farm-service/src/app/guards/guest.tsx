import { type ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { selectIsAuthorized } from "@/entities/session";
import { useAppSelector } from "@/shared/model";

type GuestGuardProps = {
  children: ReactElement;
};

export function GuestGuard({ children }: GuestGuardProps) {
  const isAuthorized = useAppSelector(selectIsAuthorized);

  if (!isAuthorized) return <Navigate to="/login" />;

  return children;
}
