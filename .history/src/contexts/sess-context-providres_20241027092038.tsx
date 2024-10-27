// context/SessionContext.js
import { createContext, useContext } from "react";

export const SessionContext = createContext(null);

export function SessionContextProvider({ session, children }) {
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
}

export const useSessionContext = () => useContext(SessionContext);
