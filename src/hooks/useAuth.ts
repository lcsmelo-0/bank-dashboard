import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

import { COOKIE_TOKEN } from "@/constants/tokens";

interface LoginData {
  username: string;
  password: string;
}

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

      router.push("/dashboard");
    },
    onError: () => {},
  });

  const logout = () => {
    Cookies.remove(COOKIE_TOKEN);
    alert("Logout realizado!");
  };

  return { loginMutation, logout };
};
