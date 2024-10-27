"use client";
// context/SessionContext.js
export interface User {
  name: string;
  email: string;
}

export interface Session {
  user: User; // user is required
}
import { createContext, useContext } from "react";

export const SessionContext = createContext<Session | null>(null);

export function SessionContextProvider({
  session,
  children,
}: {
  session: object;
  children: React.ReactNode;
}) {
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
}

export const useSessionContext = () => {
  useContext(SessionContext);
};
