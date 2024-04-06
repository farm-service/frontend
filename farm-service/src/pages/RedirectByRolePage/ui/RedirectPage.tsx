import { useMeQuery } from "@/entities/user";
import { Navigate } from "react-router-dom";

export const RedirectPage = () => {
  const { data, isLoading, isFetching } = useMeQuery();
  const userRole = data?.role_id === 1 ? "producer" : "consumer";

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  const redirectPath = userRole === "producer" ? "/producer" : "/consumer";

  return <Navigate to={redirectPath} />;
};