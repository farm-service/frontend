import { type ReactElement } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { baseLayout } from "@/app/layouts/baseLayout";
import { LoginPage } from "@/pages/Login/ui/Page/Page";

type GuestGuardProps = {
  children: ReactElement;
};

function GuestGuard({ children }: GuestGuardProps) {
  const isAuthorized = false;

  if (!isAuthorized) return <Navigate to="/login" />;

  return children;
}

type AuthGuardProps = {
  children: ReactElement;
};

function AuthGuard({ children }: AuthGuardProps) {
  const isAuthorized = true;

  if (isAuthorized) return <Navigate to="/" />;

  return children;
}

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
          element: (
            <AuthGuard>
              <div>test</div>
            </AuthGuard>
          ),
        },
      ],
    },
  ]);
