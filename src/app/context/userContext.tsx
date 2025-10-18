"use client";
import React, { createContext, JSX, useContext, useState } from "react";
import { User } from "@/app/models/User";

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}
interface UserContextProviderProps {
  children: React.ReactNode;
}
const userContext = createContext<UserContextType | null>(null);
export const useUserContext = () => {
  const context = useContext(userContext);
  if (!context) {
    throw new Error(
      "useUserContext debe usarse dentro de un UserContextProvider",
    );
  }
  return context;
};
export default function UserContextProvider({
  children,
}: UserContextProviderProps): JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}
