import styled from "styled-components";

export const CustomButton = styled.button<{ $bg?: string }>`
  width: 100%;
  background: ${({ $bg }) => $bg || " #6e8efb"};
  color: white;
  border: none;
  padding: 12px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s;
  font-weight: bold;

  &:hover {
    background: #5a75e0;
  }
`;
