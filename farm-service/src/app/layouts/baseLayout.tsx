import Button from "@mui/material/Button";
import { Layout } from "@/shared/ui";
import classes from "./baseLayout.module.css";

const TestBottomSlot = () => {
  return <div>test</div>;
};

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>LOGO</div>
      <Button color={"error"} variant="contained">
        Logout
      </Button>
    </div>
  );
};

export const baseLayout = (
  <Layout bottomSlot={<TestBottomSlot />} headerSlot={<Header />} />
);
