import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const ToggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ ToggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
