import { useContext } from "react";
import DarkThemeContext from "~/context/DarkThemeProvider";

const useDarkTheme = () => useContext(DarkThemeContext);

export default useDarkTheme;
