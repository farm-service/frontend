import { Layout } from "@/shared/ui";

const TestBottomSlot = () => {
  return <div>test</div>;
};

const Header = () => {
  return <div>header</div>;
};
export const baseLayout = (
  <Layout bottomSlot={<TestBottomSlot />} headerSlot={<Header />} />
);
