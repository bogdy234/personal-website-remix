import { FC, ReactElement } from "react";
import image from "public/javascript.svg";

interface SkillCardItemProps {
  src: string;
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
      <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
        {title}
      </h5>
      <ul className="my-4 space-y-3">
        {items.map(({ href, src, text }) => (
          <li key={`skill-card-${text}`}>
            <a
              href={href}
              className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={src} alt="javascript" className="w-24 h-16" />
              <span className="flex-1 ml-3 whitespace-nowrap">{text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
