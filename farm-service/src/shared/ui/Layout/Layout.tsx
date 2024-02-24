import { type ReactNode } from "react";
import { ScrollRestoration, Outlet } from "react-router-dom";
import css from "./Layout.module.css";

type Props = {
  navbarSlot?: ReactNode;
  headerSlot: ReactNode;
  bottomSlot?: ReactNode;
  announcementSlot?: ReactNode;
  sidebarSlot?: ReactNode;
};

export function Layout(props: Props) {
  return (
    <div>
      {props.headerSlot}
      <div className={css.container}>
        <Outlet />
      </div>
      <footer className={css.footer}>
        <div className="text_sm">{new Date().getFullYear()}</div>
      </footer>
      {props.bottomSlot}
      <ScrollRestoration />
    </div>
  );
}
