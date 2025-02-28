import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

import { COOKIE_TOKEN, Routes } from "@/constants";
import { LoginData } from "@/interfaces";

export const useAuth = () => {
  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  const loginMutation = useMutation({
    mutationFn: async ({ username, password }: LoginData) => {
      const { data } = await axios.post(`${API_URL}/auth/login`, {
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
