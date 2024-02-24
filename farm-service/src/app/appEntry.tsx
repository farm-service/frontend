import { Provider as ModalProvider } from "@ebay/nice-modal-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
// import { ThemeProvider } from '@/entities/theme'
import { appRouter } from "@/app/appRouter";
import { persistedStore, appStore } from "./appStore";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = document.getElementById("root")!;

async function initApp() {
  // todo Move @mswjs worker to lazy import
}

initApp().then(() => {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ModalProvider>
        <ReduxProvider store={appStore}>
          <PersistGate loading={null} persistor={persistedStore}>
            {/* <ThemeProvider> */}
            <RouterProvider router={appRouter()} />
            {/* </ThemeProvider> */}
          </PersistGate>
        </ReduxProvider>
      </ModalProvider>
    </React.StrictMode>
  );
});
