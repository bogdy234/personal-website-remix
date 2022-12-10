import { Link, useLocation } from "@remix-run/react";
import { FC, ReactElement } from "react";
import { HOME } from "~/constants/home";
import styles from "~/styles";
import MenuIcon from "~/components/MenuIcon/MenuIcon";
import useMobileMenu from "~/hooks/useMobileMenu";
import DarkThemeButton from "~/components/DarkThemeButton";

const Navbar: FC = (): ReactElement => {
  const location = useLocation();
  const { isOpenMenu, setIsOpenMenu } = useMobileMenu();

  return (
    <div className="flex justify-between items-center text-[1.5rem] mb-20">
      <Link
        to={"/"}
        prefetch="intent"
        className={`${styles.underlined} relative text-md ${
          location.pathname === "/" ? "after:scale-x-100" : ""
        }`}
      >
        Bogdan Filimon
      </Link>
      <div className="flex items-center gap-6">
        <MenuIcon
          isOpen={isOpenMenu}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        />
        <ul className="hidden sm:flex gap-10 text-[1.125rem] font-medium">
          {HOME.ROUTES.map((route) => (
            <li
              key={route.label}
              className={`relative hover:text-black dark:hover:text-white ${
                styles.underlined
              } ${
                location.pathname === route.path
                  ? "text-gray-800 dark:text-white after:scale-x-100"
                  : "text-slate-500"
              }`}
            >
              <Link to={route.path} prefetch="intent">
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
        <DarkThemeButton />
      </div>
    </div>
  );
};

export default Navbar;
