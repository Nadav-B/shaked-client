import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    async function loadUserFromCookies() {
      const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/users/status`;
      const token = Cookies.get("token");
      if (token) {
        try {
          const response = await axios.get(url, {
            headers: {
              Authorization: `${token}`,
            },
          });
          if (response) setUser(true);
        } catch (error){
          console.log(error)
          logout()
        }
      }
    }
    if(!user)
    loadUserFromCookies();
  }, []);

  const logout = () => {
    Cookies.remove("token");
    setUser(false)
  };

  const login = async (username, password) => {
    const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/offers`;

    let buff = new Buffer(username+":"+password);
    let base64data = buff.toString('base64');


    const token = "Basic "+base64data
        console.log(token)

    const response =  await axios.get(url,{
                                            headers: {
                                              'Authorization': token
                                            }
                                          });
    console.log(response)


    if(response){
  localStorage.setItem('token',base64data );

    console.log("hey")
      Cookies.set("token",response.headers.token)
      setUser(true)
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider
      value={{  isAuthenticated: !!user, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)