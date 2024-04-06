import { LogoutButton } from "@/features/authentication/logout/ui/LogoutButton/LogoutButton";
import { Layout } from "@/shared/ui";
import classes from "./baseLayout.module.css";

const TestBottomSlot = () => {
  return <div>test</div>;
};

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>LOGO</div>
      <LogoutButton />
    </div>
  );
};

export const baseLayout = (
  <Layout bottomSlot={<TestBottomSlot />} headerSlot={<Header />} />
);
