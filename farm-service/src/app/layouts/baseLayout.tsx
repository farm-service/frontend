import { Layout } from "@/shared/ui";
import { Header } from "@/widgets/header/ui/header";

export const baseLayout = (
  <Layout
    headerSlot={({ open, handleDrawerOpen, handleDrawerClose }) => (
      <Header
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
    )}
  />
);
