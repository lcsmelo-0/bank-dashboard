import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
`;

export const Card = styled.div`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f9f9f9;
  color: #333;
`;

export const PasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const PasswordInput = styled(Input)`
  padding-right: 40px;
`;

export const EyeIcon = styled.div`
  position: absolute;
  right: 12px;
  cursor: pointer;
  color: #777;
  font-size: 18px;
`;

export const Button = styled.button`
  width: 100%;
  background: #6e8efb;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s;

  &:hover {
    background: #5a75e0;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;
