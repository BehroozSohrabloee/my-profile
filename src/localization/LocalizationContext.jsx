import { createContext, useContext, useEffect, useState, } from "react";

import fa from "./translations/fa";
import en from "./translations/en";

const translations = {
  fa,
  en,
};

const LocalizationContext = createContext(null);

export const LocalizationProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const direction = language === "fa" ? "rtl" : "ltr";

  const changeLanguage = () => {
    setLanguage((current) =>
      current === "fa" ? "en" : "fa"
    );
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [language, direction]);

  const value = {
    language,
    direction,
    changeLanguage,
    t: translations[language],
  };

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);

  if (!context) {
    throw new Error("useLocalization must be used inside LocalizationProvider");


  }

  return context;
};