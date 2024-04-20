import { Navigate } from "react-router-dom";
import { useMeQuery } from "@/entities/user";

export const RedirectPage = () => {
  const { data, isLoading, isFetching } = useMeQuery();
  const userRole = data?.role_id === 1 ? "producer" : "consumer";

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  const redirectPath = userRole === "producer" ? "/producer" : "/consumer";

  return <Navigate to={redirectPath} />;
};
