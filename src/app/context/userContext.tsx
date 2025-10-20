"use client";
import React, { createContext, JSX, useContext, useState } from "react";
import { User } from "@/app/models/User";
import { ProductSelected } from "@/app/models/Product";

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  shoppingCart: ProductSelected[];
  setShoppingCart: React.Dispatch<React.SetStateAction<ProductSelected[]>>;
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
  const [shoppingCart, setShoppingCart] = useState<ProductSelected[]>(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("shoppingCart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });
  return (
    <userContext.Provider
      value={{ user, setUser, shoppingCart, setShoppingCart }}
    >
      {children}
    </userContext.Provider>
  );
}
