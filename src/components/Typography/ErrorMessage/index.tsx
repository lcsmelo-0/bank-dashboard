import { FC } from "react";

import { Error } from "./styles";

type Props = {
  children: React.ReactNode;
  visible: boolean;
};

export const ErrorMessage: FC<Props> = ({ children, visible }) => {
  if (!visible) {
    return null;
  }

  return <Error>{children}</Error>;
};
