import { FC, ReactElement } from "react";

interface MenuIconProps {
    isOpen?: boolean;
    onClick: () => void;
}

const MenuIcon: FC<MenuIconProps> = ({ isOpen, onClick }): ReactElement => {
    return (
        <main className="block md:hidden w-14 h-14" onClick={onClick}>
            <button
                className="border-gray-500 focus:dark:border-white focus:border-black hover:border-black hover:dark:border-white inline-flex h-14 w-14 items-center justify-center rounded-full border-2 p-1 transition focus:outline-none"
                type="button"
            >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect
                        x="6"
                        y="9"
                        width="20"
                        height="2"
                        rx="1"
                        fill="currentColor"
                        className={`transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                    ></rect>
                    <rect
                        x="6"
                        y="15"
                        width="20"
                        height="2"
                        rx="1"
                        fill="currentColor"
                        className={`${isOpen ? "opacity-0" : "opacity-1"}`}
                    ></rect>
                    <rect
                        x="6"
                        y="21"
                        width="20"
                        height="2"
                        rx="1"
                        fill="currentColor"
                        className={`transition-transform duration-300 ${isOpen ? "-rotate-45" : "rotate-0"}`}
                    ></rect>
                </svg>
            </button>
        </main>
    );
};

export default MenuIcon;
