import { useFetcher } from "@remix-run/react";
import { createContext, Dispatch, FC, useEffect, useState } from "react";

export enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

interface ThemeProviderProps {
  children: React.ReactNode;
  specifiedTheme: Theme;
}

type ThemeContextType = {
  theme: Theme;
  setTheme: Dispatch<React.SetStateAction<Theme>>;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

const prefersLightMQ = "(prefers-color-scheme: light)";
const getPreferredTheme = () =>
  window.matchMedia(prefersLightMQ).matches ? Theme.LIGHT : Theme.DARK;

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  specifiedTheme,
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (specifiedTheme) {
      if (Object.values(Theme).includes(specifiedTheme)) {
        return specifiedTheme;
      } else {
        return getPreferredTheme();
      }
    }
    return getPreferredTheme();
  });

  const persistTheme = useFetcher();

  useEffect(() => {
    persistTheme.submit(
      { theme },
      { action: "action/set-theme", method: "post" }
    );
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
