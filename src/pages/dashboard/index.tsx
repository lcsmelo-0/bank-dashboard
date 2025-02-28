import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { BiTransfer } from "react-icons/bi";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Card } from "@/components/Layout/Card";
import { PageContainer } from "@/components/PageContainer";
import { Select } from "@/components/Select";
import { Title } from "@/components/Typography/Title";
import { AccountType } from "@/constants/accounts";
import { Routes } from "@/constants/routes";
import { convertCurrencyToNumber } from "@/helpers/convertCurrentToNumber";
import { formatToCPF } from "@/helpers/formatToCPF";
import { formatToReal } from "@/helpers/formatToReal";
import { removeSpecialCharacters } from "@/helpers/removeSpecialCharacters";
import { useAccounts } from "@/hooks/integrations/useAccount";
import { useAppSelector } from "@/hooks/store";
import { useCurrencyField } from "@/hooks/useNumberField";
import { TransferAmountData } from "@/interfaces/accounts";
import { Content, Text, TransferArea } from "@/styles/DashboardStyles";

const Dashboard = () => {
  const router = useRouter();
  const { accounts } = useAppSelector((state) => state.accounts);
  const [selectedAccount, setSelectedAccount] = useState<string>("");
  const [transferAmount, setTransferAmount] = useCurrencyField(0);
  const [transferAccount, setTransferAccount] = useState<string>("");

  const { getBalanceMutation, transferBalanceMutation } = useAccounts();

  const balance = useMemo(
    () => getBalanceMutation.data,
    [getBalanceMutation.data]
  );

  useEffect(() => {
    if (selectedAccount || transferBalanceMutation.isSuccess) {
      getBalanceMutation.mutate(removeSpecialCharacters(selectedAccount));
      setTransferAccount("");
      setTransferAmount("0");

      transferBalanceMutation.reset();
    }
  }, [selectedAccount, transferBalanceMutation.isSuccess]);

  const onTransferAmount = () => {
    if (!transferAmount || !transferAccount) {
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

  const renderContent = useCallback(
    () => (
      <Content>
        <Card>
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
            <Title>Saldo conta atual: {formatToReal(balance)}</Title>
          )}
        </Card>

        {selectedAccount && accounts.length > 1 && (
          <>
            <TransferArea>
              <Card>
                <Title>Digite o valor a ser transferido</Title>
                <Input
                  type="text"
                  placeholder="Usuário"
                  value={transferAmount}
                  onChange={setTransferAmount}
                />
              </Card>

              <BiTransfer />

              <Card>
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
              </Card>
            </TransferArea>
            <Button onClick={onTransferAmount}>Transferir</Button>
          </>
        )}

        {selectedAccount && accounts.length === 1 && (
          <>
            <Title>Cadastre uma nova conta para realizar transferências</Title>
            <Button onClick={() => router.push(Routes.NEW_ACCOUNT)}>
              Cadastrar agora
            </Button>
          </>
        )}
      </Content>
    ),
    [accounts, balance, selectedAccount, transferAmount, transferAccount]
  );

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
        renderContent()
      )}
    </PageContainer>
  );
};
export default Dashboard;
