import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabList = styled.div`
  display: flex;
  border-bottom: 2px solid #ddd;
`;

export const TabButton = styled.button<{ $isActive: boolean }>`
  background: transparent;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border-bottom: ${(props) => (props.$isActive ? "2px solid #007bff" : "none")};
  color: ${(props) => (props.$isActive ? "#007bff" : "#333")};
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const TabContent = styled.div`
  padding: 20px;
`;
