import { FC, ReactElement, useEffect, useState } from "react";
import { Theme } from "~/context/ThemeProvider";
import useTheme from "~/hooks/useTheme";

interface ThemeToggleProps {
  forMobileMenu?: boolean;
}

const ThemeToggle: FC<ThemeToggleProps> = ({
  forMobileMenu = false,
}): ReactElement => {
  const [firstRender, setFirstRender] = useState<boolean>(true);
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
  };

  useEffect(() => {
    setFirstRender(false);
  }, []);

  return (
    <div
      className={`${forMobileMenu ? "block" : "hidden"} w-14 h-14 md:block`}
      onClick={changeTheme}
    >
      <button
        className={`relative overflow-hidden border-gray-500 focus:dark:border-white focus:border-black hover:border-black hover:dark:border-white inline-flex h-14 w-14 items-center justify-center rounded-full border-2 p-1 ${
          firstRender ? "" : "transition"
        } focus:outline-none`}
        type="button"
      >
        <img
          src="/moon.svg"
          alt="toggle-to-light-mode"
          className={`w-10 h-10 absolute ${
            firstRender
              ? ""
              : "transition-translate transition-visibility duration-700"
          } ${
            theme === Theme.LIGHT
              ? "-translate-x-16 translate-y-6 invisible"
              : "translate-x-0 translate-y-0"
          }`}
        />
        <img
          src="/sun.svg"
          alt="toggle-to-night-mode"
          className={`w-10 h-10 absolute ${
            firstRender
              ? ""
              : "transition-translate transition-visibility duration-700"
          } ${
            theme === Theme.DARK
              ? "translate-x-16 translate-y-6 invisible"
              : "translate-x-0 translate-y-0 visible"
          }`}
        />
      </button>
    </div>
  );
};

export default ThemeToggle;
