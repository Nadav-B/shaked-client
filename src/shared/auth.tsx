import Router from "next/router";
import React, { useState, useContext, useEffect } from "react";

interface IAuth {
  isAuthenticated: boolean;
  login: (username, password) => void;
  logout: () => void;
}
const AuthContext = React.createContext<IAuth>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

type Props = {
  children: JSX.Element;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = localStorage.getItem("token");
      if (token) setUser(true);
    }
    if (!user) loadUserFromCookies();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(false);
  };

  const login = (username, password) => {
    let buff = new Buffer(username + ":" + password);
    let base64data = buff.toString("base64");
    console.log("setting");
    localStorage.setItem("token", "Basic " + base64data);
    setUser(true);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
