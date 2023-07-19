import { FC, ReactElement, ReactNode } from "react";

interface SkillCardItemProps {
    Icon: ReactNode;
    text: string;
    href: string;
}

interface SkillCardProps {
    title: string;
    items: SkillCardItemProps[];
}

const SkillCard: FC<SkillCardProps> = ({ title, items }): ReactElement => {
    return (
        <div className="w-full h-full max-w-sm m-auto p-4 bg-white border rounded-lg shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">{title}</h5>
            <ul className="my-4 space-y-3">
                {items.map(({ href, Icon, text }) => (
                    <li key={`skill-card-${text}`} className="transition-all ease-in-out hover:scale-110">
                        <a
                            href={href}
                            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <>
                                {/* {typeof src !== "string" && src} */}
                                <div className="w-28 h-16 flex justify-center">{Icon}</div>
                                {/* <img
                src={src}
                alt={`${text}-logo`}
                className="w-24 h-16 fill-current"
              /> */}
                                <span className="flex-1 ml-3 whitespace-nowrap">{text}</span>
                            </>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillCard;
