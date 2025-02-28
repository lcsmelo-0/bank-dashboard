import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { CreateAccountData, TransferAmountData } from "@/interfaces";
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

  const getBalanceMutation = useMutation({
    mutationFn: async (accountId: string) => {
      const { data } = await axiosInstance.get(
        `http://localhost:3000/accounts/balance?account_id=${accountId}`
      );
      return data;
    },
  });

  const transferBalanceMutation = useMutation({
    mutationFn: async (payload: TransferAmountData) => {
      const { data } = await axiosInstance.post(
        `http://localhost:3000/accounts/event`,
        payload
      );
      return data;
    },
    onSuccess: () => {
      toast.success("Transferência realizada com sucesso", {
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
    onError: () => {
      toast.error("Falha ao realizar a transferência.", {
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

  return { createAccountMutation, getBalanceMutation, transferBalanceMutation };
};
