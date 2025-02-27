import { AccountType } from "@/constants/accounts";

export interface CreateAccountData {
  type: AccountType.DEPOSIT;
  destination: string;
  amount: number;
}
