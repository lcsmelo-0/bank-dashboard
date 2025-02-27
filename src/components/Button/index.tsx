import { FC } from "react";
import { CustomButton } from "./styles";

type Props = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
};

export const Button: FC<Props> = ({ children, type }) => {
  return <CustomButton type={type}>{children}</CustomButton>;
};
