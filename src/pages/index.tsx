import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { Routes } from "@/constants";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(Routes.DASHBOARD);
  }, []);

  return <></>;
};

export default Home;
