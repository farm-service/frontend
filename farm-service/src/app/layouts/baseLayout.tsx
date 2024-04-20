import { Layout } from "@/shared/ui";
import { Header } from "@/widgets/header/ui/header";

const TestBottomSlot = () => {
  return <div>test</div>;
};

export const baseLayout = (
  <Layout bottomSlot={<TestBottomSlot />} headerSlot={<Header />} />
);
