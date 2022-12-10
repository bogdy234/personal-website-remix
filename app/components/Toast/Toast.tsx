import { FC, ReactElement, useEffect, useState } from "react";

interface ToastProps {
  message: string;
}

const Toast: FC<ToastProps> = ({ message }): ReactElement => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const show = message && isVisible;

  useEffect(() => {
    if (!isVisible || !message) {
      return;
    }

    setIsVisible(true);

    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isVisible]);
  console.log("show", show);
  console.log("message", message, isVisible);

  return (
    <div
      className={`${
        show ? "block" : "hidden"
      } pt-4 px-10 pb-10 absolute top-10 right-10 w-80 min-h-40 dark:text-white bg-gray-200 dark:bg-slate-800 rounded-lg text-[1.4rem]`}
    >
      <div
        className="w-full text-end cursor-pointer"
        onClick={() => setIsVisible(false)}
      >
        X
      </div>
      <p className="break-words">{message}</p>
    </div>
  );
};

export default Toast;
