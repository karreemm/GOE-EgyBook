"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type UserRole = "guest" | "user";

interface AuthContextProps {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [userRole, setUserRole] = useState<UserRole>("guest");

  useEffect(() => {
    if (typeof window === "undefined") return; 
    const storedRole = localStorage.getItem('userRole');
    if (storedRole) {
      setUserRole(storedRole as UserRole);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userRole', userRole);
  }, [userRole]);

  return (
    <AuthContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("use the AuthProvider");
  }
  return context;
};