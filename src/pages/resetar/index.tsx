import { Button, Card, PageContainer, Title } from "@/components";
import { useAccounts } from "@/hooks";
import { Text } from "@/styles/DashboardStyles";

const ResetBank = () => {
  const { resetMutation } = useAccounts();

  const handleSubmit = () => {
    resetMutation.mutate();
  };

  return (
    <PageContainer position="center">
      <Card>
        <Title>Resetar banco</Title>
        <Text>Confirme abaixo para resetar</Text>

        <Button error onClick={handleSubmit}>
          RESETAR
        </Button>
      </Card>
    </PageContainer>
  );
};

export default ResetBank;
