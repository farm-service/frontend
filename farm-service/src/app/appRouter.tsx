import { createBrowserRouter } from "react-router-dom";
import { baseLayout } from "@/app/layouts/baseLayout";
import { HomePage, LoginPage } from "@/pages";
import { AuthGuard } from "./guards/auth";

export const appRouter = () =>
  createBrowserRouter([
    {
      element: baseLayout,
      // TODO: implement Error page
      errorElement: <div>error2</div>,
      children: [
        // TODO: move under the error layout
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/",
          element: (
            <AuthGuard>
              <HomePage />
            </AuthGuard>
          ),
        },
      ],
    },
  ]);
