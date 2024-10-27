"use client";

import { TabloidContext } from "@/contexts/tabloid-context-provider";
import { SettingsContext } from "@/contexts/settings-context-provider";

import { useContext } from "react";

const useTabloidContext = () => {
  const context = useContext(TabloidContext);

  if (!context) {
    throw new Error(
      "useTabloidContext must be used within a TabloidContextProvider"
    );
  }

  return context;
};

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error(
      "useSettingsContext must be used within a SettingsContextProvider"
    );
  }

  return context;
};

export default useTabloidContext;
