import { FC } from "react";
import { CustomButton } from "./styles";

type Props = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export const Button: FC<Props> = ({ children, type, onClick }) => {
  return (
    <CustomButton type={type} onClick={onClick}>
      {children}
    </CustomButton>
  );
};
