import { FC, ReactElement } from "react";
import useDarkTheme from "~/hooks/useDarkTheme";

interface DarkThemeButtonProps {}

const DarkThemeButton: FC<DarkThemeButtonProps> = (): ReactElement => {
  const { isDarkTheme, setIsDarkTheme } = useDarkTheme();

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="hidden w-14 h-14 sm:block" onClick={changeTheme}>
      <button
        className="relative overflow-hidden border-gray-500 focus:dark:border-white focus:border-black hover:border-black hover:dark:border-white inline-flex h-14 w-14 items-center justify-center rounded-full border-2 p-1 transition focus:outline-none"
        type="button"
      >
        <img
          src="/moon.svg"
          alt="toggle-to-light-mode"
          className={`absolute transition-translate transition-visibility duration-500 ${
            !isDarkTheme
              ? "-translate-x-12 translate-y-2 invisible"
              : "translate-x-0 translate-y-0"
          }`}
        />
        <img
          src="/sun.svg"
          alt="toggle-to-night-mode"
          className={`absolute transition-translate transition-visibility duration-500 ${
            isDarkTheme
              ? "translate-x-12 translate-y-2 invisible"
              : "translate-x-0 translate-y-0 visible"
          }`}
        />
      </button>
    </div>
  );
};

export default DarkThemeButton;
