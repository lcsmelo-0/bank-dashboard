import { FC } from "react";
import { CustomTitle } from "./styles";

type Props = {
  children: React.ReactNode;
};

export const Title: FC<Props> = ({ children }) => {
  return <CustomTitle>{children}</CustomTitle>;
};
