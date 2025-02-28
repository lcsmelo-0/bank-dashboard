import { useEffect } from "react";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Card } from "@/components/Layout/Card";
import { PageContainer } from "@/components/PageContainer";
import { Title } from "@/components/Typography/Title";
import { AccountType } from "@/constants/accounts";
import { convertCurrencyToNumber } from "@/helpers/convertCurrentToNumber";
import { removeSpecialCharacters } from "@/helpers/removeSpecialCharacters";
import { useAccounts } from "@/hooks/integrations/useAccount";
import { useAppDispatch } from "@/hooks/store";
import { useCPFField } from "@/hooks/useCPFField";
import { useCurrencyField } from "@/hooks/useNumberField";
import { CreateAccountData } from "@/interfaces/accounts";
import { saveAccount } from "@/store/slices/accounts";

const NewAccount = () => {
  const dispatch = useAppDispatch();

  const { createAccountMutation } = useAccounts();
  const [document, setDocument] = useCPFField("");
  const [initialBalance, setInitialBalance] = useCurrencyField(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!document || !initialBalance) {
      return;
    }

    const payload = {
      type: AccountType.DEPOSIT,
      destination: removeSpecialCharacters(document),
      amount: convertCurrencyToNumber(initialBalance),
    } as CreateAccountData;

    createAccountMutation.mutate(payload);
  };

  useEffect(() => {
    if (createAccountMutation.isSuccess) {
      setDocument("");
      setInitialBalance("0");

      createAccountMutation.reset();
      dispatch(saveAccount(createAccountMutation.data.id));
    }
  }, [createAccountMutation]);

  return (
    <PageContainer position="center">
      <Card>
        <Title>Adicionar nova conta</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Usuário"
            value={document}
            onChange={setDocument}
          />
          <Input
            type="text"
            placeholder="Saldo Inicial"
            value={initialBalance}
            onChange={setInitialBalance}
          />

          <Button type="submit">Cadastrar</Button>
        </form>
      </Card>
    </PageContainer>
  );
};

export default NewAccount;
