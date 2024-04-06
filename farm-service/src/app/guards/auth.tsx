import { type ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { selectIsAuthorized } from "@/entities/session";
import { useAppSelector } from "@/shared/model";

type AuthGuardProps = {
  children: ReactElement;
};

export function AuthGuard({ children }: AuthGuardProps) {
  const isAuthorized = useAppSelector(selectIsAuthorized);

  if (isAuthorized) return <Navigate to={`/`} />;

  return children;
}
