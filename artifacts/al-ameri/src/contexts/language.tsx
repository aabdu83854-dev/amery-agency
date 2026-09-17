import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "ar" | "en";

const LanguageContext = createContext<{ lang: Lang; toggle: () => void }>({ 
  lang: "ar", 
  toggle: () => {} 
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");
  const toggle = () => setLang(l => l === "ar" ? "en" : "ar");
  
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);