// SessionContext.tsx
import React, { createContext, useContext, ReactNode } from "react";
// Adjust the path to where your types are defined

// Create the context with a default value of null
const SessionContext = createContext<Session | null>(null);

export const useSessionContext = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSessionContext must be used within a SessionProvider");
  }
  return context; // This will return Session
};

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSessionContext(); // Adjust based on your session fetching logic

  // Ensure the session object is correctly structured
  const value: Session | null = session?.user
    ? { user: session.user } // Assuming session.user is correctly defined
    : null; // Provide null if there's no user

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
