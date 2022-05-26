import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = localStorage.getItem("token");
      if(token) setUser(true);

    }
    if (!user) loadUserFromCookies();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(false);
  };

  const login = async (username, password) => {
    const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/offers`;

    let buff = new Buffer(username + ":" + password);
    let base64data = buff.toString("base64");

    const token = "Basic " + base64data;

    const response = await axios.get(url, {
      headers: {
        Authorization: token,
      },
    });

    if (response) {
      localStorage.setItem("token", base64data);
      setUser(true);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: user, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
