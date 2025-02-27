import { useRouter } from "next/router";
import { FC, useEffect } from "react";

import { useAuthStatus } from "@/hooks/useAuthStatus";
import { Container } from "./styles";

type Props = {
  children: React.ReactNode;
};

export const PageContainer: FC<Props> = ({ children }) => {
  const isAuthenticated = useAuthStatus();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated]);

  return <Container>{children}</Container>;
};
