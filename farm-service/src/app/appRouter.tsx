import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthGuard } from "@/app/guards/auth";
import { GuestGuard } from "@/app/guards/guest";
import { baseLayout } from "@/app/layouts/baseLayout";
import { useMeQuery } from "@/entities/user";
import { selectUser } from "@/entities/user/model/slice";
import { HomePage } from "@/pages";
import { LoginPage } from "@/pages/Login/ui/Page/Page";
import { useAppSelector } from "@/shared/model";

const RoleBasedRoute = ({
  allowedRoles,
  component: Component,
  ...rest
}: any) => {
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

const RedirectPage = () => {
  const { data, isLoading, isFetching } = useMeQuery();
  const userRole = data?.role_id === 1 ? "producer" : "consumer";

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  const redirectPath = userRole === "producer" ? "/producer" : "/consumer";

  return <Navigate to={redirectPath} />;
};

export const appRouter = () =>
  createBrowserRouter([
    {
      element: baseLayout,
      errorElement: <div>error2</div>,
      // loader: async () => {
      //   return await featureToggleLoader(appStore.dispatch);
      // },
      children: [
        {
          path: "/login",
          element: (
            <AuthGuard>
              <LoginPage />
            </AuthGuard>
          ),
        },
        {
          path: "/",
          element: <RedirectPage />,
        },
        {
          path: "/producer",
          element: (
            <RoleBasedRoute allowedRoles={["producer"]} component={HomePage} />
          ),
        },
        {
          path: "/consumer",
          element: (
            <RoleBasedRoute allowedRoles={["consumer"]} component={HomePage} />
          ),
        },
      ],
    },
  ]);
