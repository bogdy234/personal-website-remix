import { useFetcher } from "@remix-run/react";
import {
  createContext,
  Dispatch,
  FC,
  useEffect,
  useRef,
  useState,
} from "react";

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

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  specifiedTheme,
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (specifiedTheme) {
      if (Object.values(Theme).includes(specifiedTheme)) {
        return specifiedTheme;
      } else {
        return Theme.LIGHT;
      }
    }
    return Theme.LIGHT;
  });

  const persistTheme = useFetcher();

  // TODO: remove this when persistTheme is memoized properly
  const persistThemeRef = useRef(persistTheme);

  useEffect(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);

  const mountRun = useRef(false);

  useEffect(() => {
    if (!mountRun.current) {
      mountRun.current = true;
      return;
    }
    if (!theme) {
      return;
    }

    persistThemeRef.current.submit(
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
