import { Provider as ModalProvider } from "@ebay/nice-modal-react";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { appRouter } from "@/app/appRouter";
import { persistedStore, appStore } from "./appStore";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = document.getElementById("root")!;

async function initApp() {
  // todo Move @mswjs worker to lazy import
}

const theme = createTheme();

initApp().then(() => {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ModalProvider>
        <ReduxProvider store={appStore}>
          <PersistGate loading={null} persistor={persistedStore}>
            <ThemeProvider theme={theme}>
              <Box sx={{ height: "100vh" }}>
                <CssBaseline />
                <RouterProvider router={appRouter()} />
              </Box>
            </ThemeProvider>
          </PersistGate>
        </ReduxProvider>
      </ModalProvider>
    </React.StrictMode>
  );
});
