import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

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
      Cookies.set("bank-dashboard-token", data.access_token, { expires: 1 });

      console.log("entrou");
      router.push("/dashboard");
    },
    onError: () => {},
  });

  const logout = () => {
    Cookies.remove("bank-dashboard-token");
    alert("Logout realizado!");
  };

  return { loginMutation, logout };
};
