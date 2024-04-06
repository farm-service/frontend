import { type ReactElement } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { baseLayout } from "@/app/layouts/baseLayout";
import { selectIsAuthorized } from "@/entities/session";
import { HomePage } from "@/pages";
import { LoginPage } from "@/pages/Login/ui/Page/Page";
import { useAppSelector } from "@/shared/model";

type GuestGuardProps = {
  children: ReactElement;
};

function GuestGuard({ children }: GuestGuardProps) {
  const isAuthorized = useAppSelector(selectIsAuthorized);

  if (!isAuthorized) return <Navigate to="/login" />;

  return children;
}

type AuthGuardProps = {
  children: ReactElement;
};

function AuthGuard({ children }: AuthGuardProps) {
  const isAuthorized = useAppSelector(selectIsAuthorized);

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
            <GuestGuard>
              <HomePage />
            </GuestGuard>
          ),
        },
      ],
    },
  ]);
