import { createContext, FC, useState } from "react";

interface DarkThemeProviderProps {
  children: React.ReactNode;
}

type DarkThemeContextType = {
  isDarkTheme: boolean;
  setIsDarkTheme: (isOpenMenu: boolean) => void;
};

const DarkThemeContext = createContext<DarkThemeContextType>(
  {} as DarkThemeContextType
);

export const DarkThemeProvider: FC<DarkThemeProviderProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

  return (
    <DarkThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </DarkThemeContext.Provider>
  );
};

export default DarkThemeContext;
