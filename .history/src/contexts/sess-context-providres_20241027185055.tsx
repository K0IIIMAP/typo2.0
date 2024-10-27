"use client";
// context/SessionContext.js
interface User {
  name: string;
  email: string;
}

interface Session {
  user: User | null;
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
