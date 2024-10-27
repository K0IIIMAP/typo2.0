import { useSettingsContext } from "@/lib/hooks";
import React, { useEffect } from "react";

export default function ThemeChanger() {
  const { bodyRef, theme } = useSettingsContext(); // Assuming you have setTheme in context

  useEffect(() => {
    const body = bodyRef.current;

    if (body) {
      if (theme === "dark") {
        body.classList.add("dark-theme");
        body.classList.remove("light-theme");
        body.classList.remove("space");
      } else if (theme === "light") {
        body.classList.add("light-theme");
        body.classList.remove("dark-theme");
        body.classList.remove("space");
      } else if (theme === "space") {
        body.classList.add("space");
        body.classList.remove("dark-theme");
        body.classList.remove("light-theme");
      }
    }

    // Cleanup function to reset theme when the component unmounts
    return () => {
      if (body) {
        body.classList.remove("dark-theme", "light-theme");
        body.classList.add("space"); // Set theme to space when component unmounts
      }
    };
  }, [theme, bodyRef]);

  return <></>; // No JSX rendered, just side-effects
}
