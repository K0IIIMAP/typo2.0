"use client";

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
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSessionContext must be used within a SessionProvider");
  }
  return context;
};
