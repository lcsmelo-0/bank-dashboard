# Bank Dashboard Simulator

Esta é uma aplicação de simulação de conta bancária construída com **NextJs**. Ela permite realizar operações como depósito, saque, transferência e consulta de saldo. A aplicação é protegida por autenticação.

---

Este repositório possui o projeto de back-end em: [Bank Api](https://github.com/lcsmelo-0/bank-api).

---

## Como Rodar Localmente

### Pré-requisitos

- Node.js (v18 ou superior)
- npm (v9 ou superior)

### Passos

1. **Clonar o repositório**:

   ```bash
   git clone https://github.com/lcsmelo-0/bank-dashboard.git
   cd bank-dashboard
   ```

2. **Instalar dependências**:

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

3. **Configurar variáveis de ambiente**:
   Crie um arquivo `.env` na raiz do projeto e adicione:

   ```env
   NEXT_PUBLIC_API_URL=url da api
   ```

4. **Rodar a aplicação**:

   ```bash
   npm run dev
   ```

   ```bash
   yarn dev
   ```

5. **Acessar a documentação da API**:
   Abra o navegador e acesse:
   ```
   http://localhost:3001/login
   ```

---

## Serviços Disponíveis

### Adicionar nova conta

- Adiciona uma nova conta bancária utilizando CPF

### Consultar saldo

- Consulta o saldo da conta bancária selecionada

### Saque

- Realiza o saque da conta selecionada

### Transferência

- Realiza a transferência entre duas contas cadastradas

---

## Estrutura do Projeto

```
src/
├── components/
├── constants/
├── helpers
├── hooks
├── interfaces
├── libs
├── pages
├── store
└── styles
```

---

## Tecnologias Utilizadas

- **Next.js**: Framework React para construção de interfaces modernas e escaláveis, com recursos como renderização do lado do servidor e geração de sites estáticos.
- **Redux Toolkit**: Biblioteca para gerenciamento de estado global, simplificando o uso do Redux com menos boilerplate e melhor desempenho.
- **React Query**: Biblioteca para gerenciamento de dados e cache de requisições, simplificando a interação com APIs e o estado remoto de maneira eficiente.
- **Styled-components**: Biblioteca para criação de estilos CSS dentro do JavaScript, permitindo o uso de componentes de estilo e aumentando a manutenção e escalabilidade dos estilos.
- **Autenticação com JWT**: Implementação de autenticação utilizando JSON Web Tokens para garantir a segurança e a integridade das sessões de usuários na aplicação.

---

<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="50" />
<img src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" alt="Next.js" width="50" />
<img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" alt="Redux" width="60" />
<img src="https://miro.medium.com/v2/resize:fit:400/1*Yt_kxgaoVwFX_lO3lwZPlg.png" alt="React Query" width="60" />

## Implementações futuras

- **Docker**: Implementação de docker para rodar a aplicação front end em container
- **Dark Mode**: Implementação de variações de temas.

---
