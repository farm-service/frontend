import { Navigate } from "react-router-dom";
import { type GuardProps } from "./interfaces";

export function AuthGuard({ children }: GuardProps) {
  const isAuthorized = true;

  if (!isAuthorized) return <Navigate to="/login" />;

  return children;
}
