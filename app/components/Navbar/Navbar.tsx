import { Link, Outlet, useLocation, useParams } from "@remix-run/react";
import { FC, ReactElement } from "react";
import { HOME } from "~/constants/home";
import styles from "~/styles";

const Navbar: FC = (): ReactElement => {
  const location = useLocation();

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
      <ul className="flex gap-10 text-[1.125rem] font-medium">
        {HOME.ROUTES.map((route) => (
          <li
            key={route.label}
            className={`relative hover:text-white ${
              styles.underlined
            } invisible sm:visible ${
              location.pathname === route.path
                ? "text-white after:scale-x-100"
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
