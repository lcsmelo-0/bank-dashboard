import styled from "styled-components";

export const Container = styled.div<{ $maxWidth?: string }>`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth || "400px"};
  text-align: center;
`;
