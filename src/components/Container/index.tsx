import { ContainerWrapper } from "@/ui/styles/Components/Container/styles";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
