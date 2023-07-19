import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useCatch,
    useLoaderData,
    useLocation,
} from "@remix-run/react";
import MobileMenu from "./components/MobileMenu";
import Navbar from "./components/Navbar";
import { ThemeProvider, Theme } from "./context/ThemeProvider";
import { MobileMenuProvider } from "./context/MobileMenuProvider";
import useTheme from "./hooks/useTheme";
import useMobileMenu from "./hooks/useMobileMenu";
import styles from "./styles/app.css";
import { getThemeSession } from "./utils/theme.server";
import Footer from "./components/Footer";

export const meta: MetaFunction = ({ data }) => {
    const requestInfo = data?.requestInfo;
    const title = "Bogdan Filimon";

    return {
        charset: "utf-8",
        "theme-color": requestInfo?.session.theme === "dark" ? "#1F2028" : "#FFF",
        title,
        viewport: "width=device-width,initial-scale=1",
    };
};

export function links() {
    return [
        { rel: "stylesheet", href: styles },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;500;700;800;900&display=swap",
        },
    ];
}

export type LoaderData = {
    theme: Theme | null;
    cspNonce: unknown;
};

export const loader: LoaderFunction = async ({ request, context }) => {
    const themeSession = await getThemeSession(request);

    const data: LoaderData = {
        cspNonce: context.cspNonce,
        theme: themeSession.getTheme(),
    };

    return data;
};

function App() {
    const { isOpenMenu } = useMobileMenu();
    const { theme } = useTheme();

    return (
        <html lang="en" className={`${theme === Theme.DARK ? "bg-[#1f2028] dark" : "bg-gray-100 light"}`}>
            <head>
                <Meta />
                <Links />
            </head>
            <body className="min-h-screen h-full dark:bg-[#1f2028]">
                <div className="min-h-screen w-full h-full text-3xl text-gray-800 dark:text-white px-6 py-11 m-0 overflow-hidden sm:px-16">
                    <Navbar />
                    {isOpenMenu ? <MobileMenu /> : <Outlet />}
                </div>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
                <Footer />
            </body>
        </html>
    );
}

export default function AppWithProviders() {
    const data = useLoaderData<LoaderData>();

    return (
        <ThemeProvider specifiedTheme={data.theme || Theme.LIGHT}>
            <MobileMenuProvider>
                <App />
            </MobileMenuProvider>
        </ThemeProvider>
    );
}

export function CatchBoundary() {
    const location = useLocation();
    const caught = useCatch();

    if (caught.status === 404) {
        return (
            <html
                lang="en"
                // className={`${
                //   data?.theme === Theme.DARK ? "bg-[#1f2028] dark" : "bg-gray-100"
                // } transition-bg ease-linear duration-300`}
            >
                <head>
                    <title>Oops!</title>
                    <Meta />
                    <Links />
                </head>
                <body>
                    <div className="w-full h-full text-3xl text-gray-800 dark:text-white px-6 py-11 m-0 overflow-hidden sm:px-16">
                        <Navbar />
                        <h1>{`${location.pathname} is not a page on this website. Please try another one.`}</h1>
                    </div>
                    <Scripts />
                </body>
            </html>
        );
    }

    return (
        <html
            lang="en"
            // className={`${
            //   data?.theme === Theme.DARK ? "bg-[#1f2028] dark" : "bg-gray-100"
            // } transition-bg ease-linear duration-300`}
        >
            <head>
                <title>Oops!</title>
                <Meta />
                <Links />
            </head>
            <body>
                <div className="w-full h-full text-3xl text-gray-800 dark:text-white px-6 py-11 m-0 overflow-hidden sm:px-16">
                    <Navbar />
                    <h1>
                        {caught.status} {caught.statusText}
                    </h1>
                </div>
                <Scripts />
            </body>
        </html>
    );
}
