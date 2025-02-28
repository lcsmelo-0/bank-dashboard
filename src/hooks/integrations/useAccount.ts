import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import {
  CreateAccountData,
  TransferAmountData,
  WithdrawAmountData,
} from "@/interfaces";
import axiosInstance from "@/libs/axios";
import { useAuth } from "./useAuth";

const showToast = (type: "success" | "error", message: string) => {
  toast[type](message, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const useAccounts = () => {
  const { logout } = useAuth();
  const createAccountMutation = useMutation({
    mutationFn: async (payload: CreateAccountData) => {
      const { data } = await axiosInstance.post(
        `${API_URL}/accounts/event`,
        payload
      );
      return data;
    },
    onSuccess: () => {
      showToast("success", "Conta criada com sucesso");
    },
    onError: () => {
      showToast("error", "Erro ao criar a conta.");
    },
  });

  const getBalanceMutation = useMutation({
    mutationFn: async (accountId: string) => {
      const { data } = await axiosInstance.get(
        `${API_URL}/accounts/balance?account_id=${accountId}`
      );
      return data;
    },
    onError: () => {
      showToast("error", "Erro ao buscar saldo.");
    },
  });

  const transferBalanceMutation = useMutation({
    mutationFn: async (payload: TransferAmountData) => {
      const { data } = await axiosInstance.post(
        `${API_URL}/accounts/event`,
        payload
      );
      return data;
    },
    onSuccess: () => {
      showToast("success", "Transferência realizada com sucesso");
    },
    onError: () => {
      showToast("error", "Falha ao realizar a transferência.");
    },
  });

  const withdrawMutation = useMutation({
    mutationFn: async (payload: WithdrawAmountData) => {
      const { data } = await axiosInstance.post(
        `${API_URL}/accounts/event`,
        payload
      );
      return data;
    },
    onSuccess: () => {
      showToast("success", "Saque realizado com sucesso");
    },
    onError: () => {
      showToast("error", "Falha ao realizar o saque.");
    },
  });
  const resetMutation = useMutation({
    mutationFn: async () => {
      const { data } = await axiosInstance.post(`${API_URL}/accounts/reset`);
      return data;
    },
    onSuccess: () => {
      logout();
      showToast("success", "Reset realizado com sucesso");
    },
    onError: () => {
      showToast("error", "Falha ao resetar o banco.");
    },
  });

  return {
    createAccountMutation,
    getBalanceMutation,
    transferBalanceMutation,
    withdrawMutation,
    resetMutation,
  };
};
