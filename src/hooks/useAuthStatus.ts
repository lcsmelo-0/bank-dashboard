import { useState, useEffect } from "react";
import Cookies from "js-cookie";

import { COOKIE_TOKEN } from "@/constants/tokens";

export const useAuthStatus = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  useEffect(() => {
    const token = Cookies.get(COOKIE_TOKEN);
    setIsAuthenticated(!!token);
  }, []);

  return isAuthenticated;
};
