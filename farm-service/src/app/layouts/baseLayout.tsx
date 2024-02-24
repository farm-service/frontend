import { Layout } from "@/shared/ui";
// import { LayoutHeader } from '@/widgets/LayoutHeader'
// import { LayoutProfileCard } from '@/widgets/LayoutProfileCard'

const TestBottomSlot = () => {
  return <div>test</div>;
};

const Header = () => {
  return <div>header</div>;
};
export const baseLayout = (
  <Layout bottomSlot={<TestBottomSlot />} headerSlot={<Header />} />
);
