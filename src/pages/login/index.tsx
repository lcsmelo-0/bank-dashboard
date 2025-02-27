import { NextPage } from "next";
import { useState } from "react";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Card } from "@/components/Layout/Card";
import { ErrorMessage } from "@/components/Typography/ErrorMessage";
import { Title } from "@/components/Typography/Title";
import { useAuth } from "@/hooks/integrations/useAuth";
import { LoginData } from "@/interfaces/login";
import { Container } from "@/styles/LoginStyles";

const LoginPage: NextPage = () => {
  const { loginMutation } = useAuth();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { username, password } as LoginData;

    loginMutation.mutate(payload);
  };

  return (
    <Container>
      <Card>
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={setUsername}
          />
          <Input
            type={"password"}
            placeholder="Senha"
            value={password}
            onChange={setPassword}
          />
          <ErrorMessage visible={loginMutation.isError}>
            Usuário ou senha incorretos.
          </ErrorMessage>
          <Button type="submit">
            {loginMutation.isPending ? "Entrando..." : "Entrar"}
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default LoginPage;
