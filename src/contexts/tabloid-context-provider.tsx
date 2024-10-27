"use client";

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

// Define the context type
type TTabloidContext = {
  mistakes: number;
  totalSecs: number;
  cpm: number;
  setTotalSecs: Dispatch<SetStateAction<number>>;
  setCpm: Dispatch<SetStateAction<number>>;
  setMistakes: Dispatch<SetStateAction<number>>;
  isExpired: boolean;
  setIsExpired: Dispatch<SetStateAction<boolean>>;
};

// Define the props for the context provider
type TabloidContextProviderProps = {
  children: React.ReactNode;
};

// Create the context
export const TabloidContext = createContext<TTabloidContext | null>(null);

// Define the context provider component
export default function TabloidContextProvider({
  children,
}: TabloidContextProviderProps) {
  // State variables
  const [mistakes, setMistakes] = useState(0);
  const [totalSecs, setTotalSecs] = useState(0);
  const [isExpired, setIsExpired] = useState(false);
  const [cpm, setCpm] = useState(0);

  return (
    <TabloidContext.Provider
      value={{
        mistakes,
        setMistakes,
        totalSecs,
        setTotalSecs,
        cpm,
        setCpm,
        isExpired,
        setIsExpired,
      }}
    >
      {children}
    </TabloidContext.Provider>
  );
}
