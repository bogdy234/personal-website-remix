import { Link } from "@remix-run/react";
import { FC, ReactElement } from "react";
import { HOME } from "~/constants/home";
import useMobileMenu from "~/hooks/useMobileMenu";
import ThemeToggle from "../ThemeToggle";

const MobileMenu: FC = (): ReactElement => {
  const { setIsOpenMenu } = useMobileMenu();

  return (
    <div className="h-screen flex flex-col gap-8 items-center">
      <ul className="flex flex-col text-[1.125rem] font-medium w-full">
        {HOME.ROUTES.map((route) => (
          <div>
            <Link to={route.path} prefetch="intent">
              <li
                key={route.label}
                className={`p-10 w-full h-full relative hover:text-black dark:hover:text-white ${
                  location.pathname === route.path
                    ? "text-gray-800 dark:text-white after:scale-x-100"
                    : "text-slate-500"
                }`}
                onClick={() => setIsOpenMenu(false)}
              >
                {route.label}
              </li>
            </Link>
            <div className="w-full h-[1px] bg-slate-500" />
          </div>
        ))}
      </ul>
      <ThemeToggle forMobileMenu />
    </div>
  );
};

export default MobileMenu;
