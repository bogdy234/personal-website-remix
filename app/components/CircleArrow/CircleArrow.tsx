import { FC, ReactElement } from "react";

interface CircleArrowProps {
  runAnimation?: boolean;
}

const CircleArrow: FC<CircleArrowProps> = ({
  runAnimation = true,
}): ReactElement => {
  return (
    <div className="relative inline-flex h-14 w-14 flex-none items-center justify-center p-1">
      <div className="absolute text-gray-200 dark:text-gray-600">
        <svg width="60" height="60">
          <circle
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            r="28"
            cx="30"
            cy="30"
          ></circle>
          <circle
            className={`text-white ${
              runAnimation ? "animate-empty-circle" : ""
            } group-hover:animate-fill-circle`}
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            r="28"
            cx="30"
            cy="30"
            style={{
              strokeDasharray: "175.929, 175.929",
              transformOrigin: "30px 30px",
              transform: "rotate(-90deg)",
            }}
            transform-origin="30px 30px"
            strokeDashoffset="175.929"
          ></circle>
        </svg>
      </div>
      <span
        className={`${
          runAnimation ? "animate-move-right-reverse" : ""
        } group-hover:animate-move-right`}
      >
        <svg
          className="transform -rotate-90"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
    </div>
  );
};

export default CircleArrow;
