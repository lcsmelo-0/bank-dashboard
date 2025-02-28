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

  const handleSubmit = () => {
    const payload = { username, password } as LoginData;
    loginMutation.mutate(payload);
  };

  return (
    <Container>
      <Card>
        <Title>Login</Title>
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
        <Button onClick={handleSubmit}>
          {loginMutation.isPending ? "Entrando..." : "Entrar"}
        </Button>
      </Card>
    </Container>
  );
};

export default LoginPage;
