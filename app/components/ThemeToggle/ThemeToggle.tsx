import { FC, ReactElement } from "react";
import { Theme } from "~/context/ThemeProvider";
import useTheme from "~/hooks/useTheme";

interface ThemeToggleProps {
  forMobileMenu?: boolean;
}

const ThemeToggle: FC<ThemeToggleProps> = ({
  forMobileMenu = false,
}): ReactElement => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    localStorage.setItem("theme", JSON.stringify(newTheme));
    setTheme(newTheme);
  };

  return (
    <div
      className={`${forMobileMenu ? "block" : "hidden"} w-14 h-14 md:block`}
      onClick={changeTheme}
    >
      <button
        className="relative overflow-hidden border-gray-500 focus:dark:border-white focus:border-black hover:border-black hover:dark:border-white inline-flex h-14 w-14 items-center justify-center rounded-full border-2 p-1 transition focus:outline-none"
        type="button"
      >
        <img
          src="/moon.svg"
          alt="toggle-to-light-mode"
          className={`absolute transition-translate transition-visibility duration-500 ${
            theme === Theme.LIGHT
              ? "-translate-x-12 translate-y-2 invisible"
              : "translate-x-0 translate-y-0"
          }`}
        />
        <img
          src="/sun.svg"
          alt="toggle-to-night-mode"
          className={`absolute transition-translate transition-visibility duration-500 ${
            theme === Theme.DARK
              ? "translate-x-12 translate-y-2 invisible"
              : "translate-x-0 translate-y-0 visible"
          }`}
        />
      </button>
    </div>
  );
};

export default ThemeToggle;
