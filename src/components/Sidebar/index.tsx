import { useRouter } from "next/router";
import { FC, useState } from "react";
import {
  FaBars,
  FaHome,
  FaPlus,
  FaSignOutAlt,
  FaTimes,
  FaTrash,
  FaUser,
} from "react-icons/fa";

import { Routes } from "@/constants";
import { useAuth } from "@/hooks";
import {
  HamburgerButton,
  Icon,
  LogoutButton,
  MenuItem,
  SidebarContainer,
  UserImage,
  UserProfile,
} from "./styles";

export const SidebarMenu: FC = () => {
  const { logout } = useAuth();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const checkIfSelected = (route: string) => router.pathname === route;

  const handleLogout = () => logout();

  return (
    <>
      <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </HamburgerButton>
      <SidebarContainer $isOpen={isOpen}>
        <UserProfile>
          <UserImage>
            <FaUser />
          </UserImage>
          <span>User Name</span>
        </UserProfile>
        <MenuItem
          $selected={checkIfSelected(Routes.DASHBOARD)}
          onClick={() => router.push(Routes.DASHBOARD)}
        >
          <Icon>
            <FaHome />
          </Icon>
          Dashboard
        </MenuItem>
        <MenuItem
          $selected={checkIfSelected(Routes.NEW_ACCOUNT)}
          onClick={() => router.push(Routes.NEW_ACCOUNT)}
        >
          <Icon>
            <FaPlus />
          </Icon>
          Criar conta
        </MenuItem>
        <MenuItem
          $selected={checkIfSelected(Routes.RESET)}
          onClick={() => router.push(Routes.RESET)}
        >
          <Icon>
            <FaTrash />
          </Icon>
          Resetar banco
        </MenuItem>
        <LogoutButton onClick={handleLogout}>
          <Icon>
            <FaSignOutAlt />
          </Icon>
          Logout
        </LogoutButton>
      </SidebarContainer>
    </>
  );
};
