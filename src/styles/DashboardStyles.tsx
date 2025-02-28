import styled from "styled-components";

export const Text = styled.p`
  color: #333;
`;

export const Content = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TransferArea = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 20px;

  > svg {
    width: 40px;
    height: 40px;
    color: #6e8efb;
  }

  > div {
    height: 300px;
  }
`;
