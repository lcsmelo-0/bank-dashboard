import { useRouter } from "next/router";
import { FC, useEffect } from "react";

import { SidebarMenu } from "@/components";
import { useAuthStatus } from "@/hooks";
import { Container } from "./styles";

type Props = {
  children: React.ReactNode;
  position?: "center" | "left";
};

export const PageContainer: FC<Props> = ({ children, position = "left" }) => {
  const isAuthenticated = useAuthStatus();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated]);

  return (
    <Container $position={position}>
      <SidebarMenu />
      {children}
    </Container>
  );
};
