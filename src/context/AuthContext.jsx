import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

import React from "react";
import { auth } from "../firebase/Firebase";

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, initializelUser);
    return unsubcribe;
  }, []);

  const initializelUser = async (user) => {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ loading, currentUser, userLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
