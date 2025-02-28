import { NextPage } from "next";
import { useState } from "react";

import { Button, Card, ErrorMessage, Input, Title } from "@/components";
import { useAuth } from "@/hooks";
import { LoginData } from "@/interfaces";
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
