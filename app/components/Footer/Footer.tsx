import { FC, ReactElement } from "react";
import { GithubIcon, LinkedinIcon } from "~/components/Icons/Icons";

const Footer: FC = (): ReactElement => {
    return (
        <footer className="min-h-52 bg-gray-300 dark:bg-gray-700 dark:text-gray-100 px-6 py-11">
            <div className="flex flex-col items-center gap-2 md:flex-row md:justify-around">
                <div>
                    <h2 className="text-blue-700 dark:text-blue-300 text-xl text-center">Location:</h2>
                    <h3>Cluj-Napoca, Romania</h3>
                </div>
                <div>
                    <h2 className="text-blue-700 dark:text-blue-300 text-xl text-center">Email adress:</h2>
                    <h3>filimonbogdan89@gmail.com</h3>
                </div>
            </div>
            <div className="flex justify-center items-center gap-6 mt-6 md:mt-12 group">
                <a href="https://github.com/bogdy234" target="_blank" rel="noopener noreferrer">
                    <div className="w-8 h-8 text-black dark:text-white cursor-pointers hover:animate-bump">
                        <GithubIcon />
                    </div>
                </a>
                <a
                    href="https://www.linkedin.com/in/bogdan-filimon-2a0115193/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="w-8 h-8 text-black dark:text-white cursor-pointers hover:animate-bump">
                        <LinkedinIcon />
                    </div>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
