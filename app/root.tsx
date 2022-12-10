import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import MobileMenu from "./components/MobileMenu";
import Navbar from "./components/Navbar";
import { DarkThemeProvider } from "./context/DarkThemeProvider";
import { MobileMenuProvider } from "./context/MobileMenuProvider";
import useDarkTheme from "./hooks/useDarkTheme";
import useMobileMenu from "./hooks/useMobileMenu";
import styles from "./styles/app.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;500;700;800;900&display=swap",
    },
  ];
}

function App() {
  const { isOpenMenu } = useMobileMenu();
  const { isDarkTheme } = useDarkTheme();

  return (
    <html
      lang="en"
      className={`${
        isDarkTheme ? "bg-[#1f2028] dark" : "bg-gray-100"
      } transition-bg ease-linear duration-300`}
    >
      <head>
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen h-full dark:bg-[#1f2028]">
        <div className="w-full h-full text-3xl text-gray-800 dark:text-white px-6 py-11 m-0 overflow-hidden sm:px-16">
          <Navbar />
          {isOpenMenu ? <MobileMenu /> : <Outlet />}
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  return (
    <DarkThemeProvider>
      <MobileMenuProvider>
        <App />
      </MobileMenuProvider>
    </DarkThemeProvider>
  );
}
