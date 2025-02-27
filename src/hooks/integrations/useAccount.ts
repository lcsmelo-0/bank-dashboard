import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { CreateAccountData } from "@/interfaces/accounts";
import axiosInstance from "@/libs/axios";

export const useAccounts = () => {
  const createAccountMutation = useMutation({
    mutationFn: async (payload: CreateAccountData) => {
      const { data } = await axiosInstance.post(
        "http://localhost:3000/accounts/event",
        payload
      );
      return data;
    },
    onSuccess: () => {
      toast.success("Conta criada com sucesso", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      setTimeout(() => {
        createAccountMutation.reset();
      }, 500);
    },
    onError: () => {
      toast.error("Erro ao criar a conta.", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    },
  });

  return { createAccountMutation };
};
