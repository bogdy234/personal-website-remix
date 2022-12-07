import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Navbar from "./components/Navbar";
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

export default function App() {
  return (
    <html lang="en" className="bg-[#1f2028]">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="w-full min-h-screen h-full bg-[#1f2028] text-3xl text-white px-6 sm:px-16 py-11 m-0 overflow-hidden">
          <Navbar />
          <div className="sm:mx-10">
            <Outlet />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
