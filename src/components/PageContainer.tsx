import { useAuthStatus } from "@/hooks/useAuthStatus";
import { FC } from "react";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

export const PageContainer: FC<Props> = ({ children }) => {
  const isAuthenticated = useAuthStatus();
  const router = useRouter();

  if (!isAuthenticated) {
    if (typeof window !== "undefined") {
      router.push("/login");
    }

    return null;
  }

  return <main>{children}</main>;
};
