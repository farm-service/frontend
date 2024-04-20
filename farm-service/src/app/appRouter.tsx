import { createBrowserRouter } from "react-router-dom";
import { AuthGuard, RoleBasedGuard } from "@/app/guards";
import { baseLayout } from "@/app/layouts/baseLayout";
import { HomePage } from "@/pages";
import { LoginPage } from "@/pages/Login/ui/Page/Page";
import { RedirectPage } from "@/pages/RedirectByRolePage";

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
            <RoleBasedGuard allowedRoles={["producer"]} component={HomePage} />
          ),
        },
        {
          path: "/consumer",
          // another page
          element: (
            <RoleBasedGuard allowedRoles={["consumer"]} component={HomePage} />
          ),
        },
      ],
    },
  ]);
