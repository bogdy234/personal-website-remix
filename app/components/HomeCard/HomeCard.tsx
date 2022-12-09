import { FC, ReactElement } from "react";

interface HomeCardProps {
  title: string;
  src: string;
  content: string;
}

const HomeCard: FC<HomeCardProps> = ({ title, src, content }): ReactElement => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <div className="mb-5">
        <img
          src={src}
          alt={`area-${title}`}
          className="max-h-60 m-auto aspect-square"
        />
      </div>

      <h3 className="text-lg font-bold mb-2 text-gray-600">{title}</h3>

      <p className="text-sm leading-6 text-gray-600">{content}</p>
    </div>
  );
};

export default HomeCard;
