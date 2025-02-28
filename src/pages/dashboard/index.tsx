import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { BiTransfer } from "react-icons/bi";
import { toast } from "react-toastify";

import {
  Button,
  Card,
  Input,
  PageContainer,
  Select,
  Tab,
  Tabs,
  Title,
} from "@/components";
import { AccountType, Routes } from "@/constants";
import {
  convertCurrencyToNumber,
  formatToCPF,
  formatToReal,
  removeSpecialCharacters,
} from "@/helpers";
import { useAccounts, useAppSelector, useCurrencyField } from "@/hooks";
import { TransferAmountData, WithdrawAmountData } from "@/interfaces";
import { Text, TransferArea } from "@/styles/DashboardStyles";

const Dashboard = () => {
  const router = useRouter();
  const { accounts } = useAppSelector((state) => state.accounts);
  const [selectedAccount, setSelectedAccount] = useState<string>("");
  const [transferAmount, setTransferAmount] = useCurrencyField(0);
  const [transferAccount, setTransferAccount] = useState<string>("");
  const [withdrawAmount, setWithdrawAmount] = useCurrencyField(0);

  const { getBalanceMutation, transferBalanceMutation, withdrawMutation } =
    useAccounts();

  const balance = useMemo(
    () => getBalanceMutation.data,
    [getBalanceMutation.data]
  );

  const showError = (message: string) => {
    toast["error"](message, {
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

  const onTransferAmount = () => {
    if (!transferAmount || !transferAccount) {
      return;
    }

    if (convertCurrencyToNumber(transferAmount) > balance) {
      showError("Saldo insuficiente para realizar a transferência");
      return;
    }

    const payload: TransferAmountData = {
      type: AccountType.TRANSFER,
      origin: selectedAccount,
      amount: convertCurrencyToNumber(transferAmount),
      destination: transferAccount,
    };

    transferBalanceMutation.mutate(payload);
  };

  const onWithdrawAmount = () => {
    if (!withdrawAmount) {
      return;
    }

    if (convertCurrencyToNumber(withdrawAmount) > balance) {
      showError("Saldo insuficiente para realizar o saque");

      return;
    }

    const payload: WithdrawAmountData = {
      type: AccountType.WITHDRAW,
      origin: selectedAccount,
      amount: convertCurrencyToNumber(withdrawAmount),
    };

    withdrawMutation.mutate(payload);
  };

  const renderAccountBalanceContent = useCallback(
    () => (
      <Card maxWidth="1000px">
        <Text>Selecione uma conta</Text>
        <Select
          onChange={setSelectedAccount}
          placeholder="Selecione uma conta"
          value={selectedAccount}
        >
          {accounts.map((account) => (
            <option key={account} value={account}>
              Conta - {formatToCPF(account)}
            </option>
          ))}
        </Select>
        {!!selectedAccount && (
          <Title>Saldo atual da conta: {formatToReal(balance)}</Title>
        )}
      </Card>
    ),
    [accounts, balance, selectedAccount, transferAmount, transferAccount]
  );

  const renderTabsContent = useCallback(
    () => (
      <Card maxWidth="1000px">
        <Tabs>
          <Tab label="Saque">
            <div>
              <Title>Digite o valor do saque</Title>
              <Input
                type="text"
                placeholder="Digite o valor"
                value={withdrawAmount}
                onChange={setWithdrawAmount}
              />
            </div>
            <Button onClick={onWithdrawAmount}>Sacar</Button>
          </Tab>
          <Tab label="Transferência">
            {selectedAccount && accounts.length > 1 && (
              <>
                <TransferArea>
                  <div>
                    <Title>Digite o valor a ser transferido</Title>
                    <Input
                      type="text"
                      placeholder="Digite o vlaor"
                      value={transferAmount}
                      onChange={setTransferAmount}
                    />
                  </div>

                  <BiTransfer />

                  <div>
                    <Title>Selecione a conta de destino</Title>
                    <Select
                      onChange={setTransferAccount}
                      placeholder="Selecione uma conta"
                      value={transferAccount}
                    >
                      {accounts
                        .filter(
                          (account) =>
                            account !== removeSpecialCharacters(selectedAccount)
                        )
                        ?.map((account) => (
                          <option key={account} value={account}>
                            Conta - {formatToCPF(account)}
                          </option>
                        ))}
                    </Select>
                  </div>
                </TransferArea>
                <Button onClick={onTransferAmount}>Transferir</Button>
              </>
            )}
            {selectedAccount && accounts.length === 1 && (
              <>
                <Title>
                  Cadastre uma nova conta para realizar transferências
                </Title>
                <Button onClick={() => router.push(Routes.NEW_ACCOUNT)}>
                  Cadastrar agora
                </Button>
              </>
            )}
          </Tab>
        </Tabs>
      </Card>
    ),
    [accounts, selectedAccount, transferAccount, transferAmount, withdrawAmount]
  );

  useEffect(() => {
    if (selectedAccount || transferBalanceMutation.isSuccess) {
      getBalanceMutation.mutate(removeSpecialCharacters(selectedAccount));
      setTransferAccount("");
      setTransferAmount("0");

      transferBalanceMutation.reset();
    }
  }, [selectedAccount, transferBalanceMutation.isSuccess]);

  useEffect(() => {
    if (withdrawMutation.isSuccess) {
      getBalanceMutation.mutate(removeSpecialCharacters(selectedAccount));
      setWithdrawAmount("0");

      withdrawMutation.reset();
    }
  }, [withdrawMutation.isSuccess]);

  return (
    <PageContainer position="center">
      {getBalanceMutation.isError || !accounts.length ? (
        <Card>
          <Title>Nenhuma conta cadastrada</Title>

          <Button onClick={() => router.push(Routes.NEW_ACCOUNT)}>
            Cadastrar agora
          </Button>
        </Card>
      ) : (
        renderAccountBalanceContent()
      )}

      {selectedAccount && renderTabsContent()}
    </PageContainer>
  );
};
export default Dashboard;
