import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

import { Routes } from "@/constants/routes";
import { COOKIE_TOKEN } from "@/constants/tokens";
import { LoginData } from "@/interfaces/login";

export const useAuth = () => {
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: async ({ username, password }: LoginData) => {
      const { data } = await axios.post("http://localhost:3000/auth/login", {
        username,
        password,
      });
      return data;
    },
    onSuccess: (data) => {
      Cookies.set(COOKIE_TOKEN, data.access_token, { expires: 1 });

      router.push(Routes.DASHBOARD);
    },
    onError: () => {},
  });

  const logout = () => {
    Cookies.remove(COOKIE_TOKEN);
    router.push(Routes.LOGIN);
  };

  return { loginMutation, logout };
};
