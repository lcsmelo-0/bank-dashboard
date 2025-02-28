import { FC, FormEvent } from "react";
import { CustomButton } from "./styles";

type Props = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  error?: boolean;
};

export const Button: FC<Props> = ({ children, type, onClick, error }) => {
  const onHandleClick = (e: FormEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };
  return (
    <CustomButton
      type={type}
      onClick={onHandleClick}
      $bg={error ? "#c10000" : "#6e8efb"}
    >
      {children}
    </CustomButton>
  );
};
