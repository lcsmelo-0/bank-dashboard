import styled from "styled-components";

export const Container = styled.main<{ $position: string }>`
  min-height: 100vh;
  background: linear-gradient(135deg, #b6c6ff, #ffffff);
  padding: 50px 32px 32px 40px;
  display: flex;
  justify-content: ${({ $position }) => $position};
  align-items: center;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    padding: 32px 32px 32px 282px;
  }
`;
