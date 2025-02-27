import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const CustomInput = styled.input<{ $isPassword?: boolean }>`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f9f9f9;
  color: #333;
  padding-right: ${({ $isPassword }) => ($isPassword ? "40px" : "0")};
`;

export const EyeIcon = styled.div`
  position: absolute;
  right: 12px;
  cursor: pointer;
  color: #777;
  font-size: 18px;
`;
