import { createContext, useEffect, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { getMyDataService } from "../services/auth/getMyDataService";

export const EmployeeTokenContext = createContext();

export const EmployeeTokenContextProvider = ({ children }) => {
  const { data: token, setData: setToken } = useLocalStorage("token", "");
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const getEmployeeData = async () => {
      try {
        const employee = await getMyDataService(token);

        setEmployee(employee);
      } catch (error) {
        setToken("");
        setEmployee(null);
      }
    };
    if (token) getEmployeeData();
  }, [token, setToken]);

  const logout = () => {
    setToken("");
    setEmployee(null);
  };

  return (
    <EmployeeTokenContext.Provider
      value={{ employee, token, setToken, logout }}
    >
      {children}
    </EmployeeTokenContext.Provider>
  );
};

export const useEmployeeTokenContext = () => {
  return useContext(EmployeeTokenContext);
};
