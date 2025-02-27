import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export const useAuthStatus = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = Cookies.get("bank-dashboard-token");
    setIsAuthenticated(!!token);
  }, []);

  return isAuthenticated;
};
