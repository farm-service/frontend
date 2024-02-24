import { Navigate } from "react-router-dom";
import { type GuardProps } from "./interfaces";

export function GuestGuard({ children }: GuardProps) {
  const isAuthorized = false;

  if (!isAuthorized) return <Navigate to="/login" />;

  return children;
}
