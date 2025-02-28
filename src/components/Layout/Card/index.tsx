import { FC } from "react";

import { Container } from "./styles";

type Props = {
  children: React.ReactNode;
  maxWidth?: string;
};

export const Card: FC<Props> = ({ children, maxWidth }) => {
  return <Container $maxWidth={maxWidth}>{children}</Container>;
};
