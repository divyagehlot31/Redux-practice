// components/Greeting.jsx
import React, { useContext } from "react";
import { LanguageContext } from "../contexts/ThemeContext";

const Greeting = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <h2>{language === "en" ? "Welcome!" : "स्वागत है!"}</h2>
      <button className="btn btn-sm btn-outline-primary" onClick={toggleLanguage}>
        {language === "en" ? "Switch to Hindi" : "Switch to English"}
      </button>
    </div>
  )
};

export default Greeting;
