import styled from "styled-components";

export const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-250px")};
  width: 250px;
  height: 100vh;
  background-color: #2c3e50;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease;
  z-index: 1000;

  @media (min-width: 768px) {
    left: 0;
  }
`;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const UserImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #bdc3c7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const MenuItem = styled.div<{ $selected?: boolean }>`
  display: flex;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  transition: background 0.3s;
  width: 100%;
  justify-content: flex-start;
  background-color: ${({ $selected }) =>
    $selected ? "#34495e" : "transparent"};

  &:hover {
    background-color: #34495e;
  }
`;

export const Icon = styled.div`
  margin-right: 10px;
`;

export const LogoutButton = styled(MenuItem)`
  margin-top: auto;
  color: #e74c3c;
  font-weight: bold;
`;

export const HamburgerButton = styled.button`
  position: fixed;
  top: 15px;
  left: 15px;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1100;

  @media (min-width: 768px) {
    display: none;
  }
`;
