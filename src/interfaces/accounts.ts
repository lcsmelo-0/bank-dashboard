import { AccountType } from "@/constants/accounts";

export interface CreateAccountData {
  type: AccountType.DEPOSIT;
  destination: string;
  amount: number;
}

export interface TransferAmountData {
  type: AccountType.TRANSFER;
  origin: string;
  amount: number;
  destination: string;
}
