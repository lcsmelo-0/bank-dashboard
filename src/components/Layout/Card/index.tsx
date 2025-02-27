import { FC } from "react";
import { Container } from "./styles";

type Props = {
  children: React.ReactNode;
};

export const Card: FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};
