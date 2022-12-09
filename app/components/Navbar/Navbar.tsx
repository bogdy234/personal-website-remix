import { Link, useLocation } from "@remix-run/react";
import { FC, ReactElement, useState } from "react";
import { HOME } from "~/constants/home";
import styles from "~/styles";
import MenuIcon from "~/components/MenuIcon/MenuIcon";

const Navbar: FC = (): ReactElement => {
  const location = useLocation();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-between text-[1.5rem] mb-20">
      <Link
        to={"/"}
        prefetch="intent"
        className={`${styles.underlined} relative text-md ${
          location.pathname === "/" ? "after:scale-x-100" : ""
        }`}
      >
        Bogdan Filimon
      </Link>
      {/* <svg viewBox="0 0 100 80" width="40" height="40" fill="white">
        <rect width="100" height="20" rx="8"></rect>
        <rect y="30" width="100" height="20" rx="8"></rect>
        <rect y="60" width="100" height="20" rx="8"></rect>
      </svg> */}
      {/* <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="6"
          y="9"
          width="20"
          height="2"
          rx="1"
          fill="currentColor"
          transform-origin="0px 0px"
          style={{ transform: "none", transformOrigin: "0px 0px" }}
        ></rect>
        <rect
          x="6"
          y="15"
          width="20"
          height="2"
          rx="1"
          fill="currentColor"
          opacity="1"
        ></rect>
        <rect
          x="6"
          y="21"
          width="20"
          height="2"
          rx="1"
          fill="currentColor"
          transform-origin="0px 0px"
          // style="transform: none; transform-origin: 0px 0px;"
        ></rect>
      </svg> */}
      <MenuIcon isOpen={!open} onClick={() => setOpen(!open)} />

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
    </div>
  );
};

export default Navbar;
