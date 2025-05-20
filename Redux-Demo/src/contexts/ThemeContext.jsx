
import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const LanguageContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [Theme, setTheme] = useState("light");
    const [language, setLanguage] = useState("en");


  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "hi" : "en"));
  };

  return (
    <ThemeContext.Provider value={{ Theme, toggleTheme }}>
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div className={Theme === "dark" ? "bg-dark text-light min-vh-100" : "bg-light text-dark min-vh-100"}> {children}</div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};
