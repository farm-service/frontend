import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { styled, useTheme } from "@mui/material/styles";
import * as React from "react";
import { type ReactNode } from "react";
import { ScrollRestoration, Outlet } from "react-router-dom";
import { DrawerHeader, Main } from "@/shared/ui";
import css from "./Layout.module.css";

type Props = {
  navbarSlot?: ReactNode;
  headerSlot: (data: {
    open: boolean;
    handleDrawerOpen: VoidFunction;
    handleDrawerClose: VoidFunction;
  }) => ReactNode;
  bottomSlot?: ReactNode;
  announcementSlot?: ReactNode;
  sidebarSlot?: ReactNode;
};

export function Layout(props: Props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {props.headerSlot({ open, handleDrawerOpen, handleDrawerClose })}
      <Main open={open}>
        <DrawerHeader />
        <Box component="main" className={css.root}>
          <div className={css.container}>
            <Outlet />
          </div>
          <footer className={css.footer}>
            <div className="text_sm">{new Date().getFullYear()}</div>
          </footer>

          <ScrollRestoration />
        </Box>
      </Main>
      {props.bottomSlot}
    </Box>
  );
}
