import { NextPage } from "next";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { useAuth } from "@/hooks/useAuth";
import {
  Button,
  Card,
  Container,
  ErrorMessage,
  EyeIcon,
  Input,
  PasswordInput,
  PasswordWrapper,
  Title,
} from "@/styles/LoginStyles";

const LoginPage: NextPage = () => {
  const { loginMutation } = useAuth();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({ username, password });
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
            onChange={(e) => setUsername(e.target.value)}
          />
          <PasswordWrapper>
            <PasswordInput
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <EyeIcon onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </EyeIcon>
          </PasswordWrapper>
          {loginMutation.isError && (
            <ErrorMessage>Usuário ou senha incorretos.</ErrorMessage>
          )}
          <Button type="submit">
            {loginMutation.isPending ? "Entrando..." : "Entrar"}
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default LoginPage;
