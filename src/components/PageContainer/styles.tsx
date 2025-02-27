import styled from "styled-components";

export const Container = styled.main<{ $position: string }>`
  min-height: 100vh;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  padding: 50px 32px 32px 40px;
  display: flex;
  justify-content: ${({ $position }) => $position};
  align-items: flex-start;

  @media (min-width: 768px) {
    padding: 32px 32px 32px 282px;
  }
`;
