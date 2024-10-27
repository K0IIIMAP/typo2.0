"use client";
// context/SessionContext.js

import { createContext, useContext } from "react";

export const SessionContext = createContext(null);

export function SessionContextProvider({
  session,
  children,
}: {
  session: object;
  children: React.ReactNode;
}) {
  return (
    //@ts-ignore
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
}

export const useSessionContext = () => useContext(SessionContext);
