import { Link } from "@remix-run/react";

interface BlogCardProps {
    src: string;
    title: string;
    description: string;
}

export default function BlogCard({ src, title, description }: BlogCardProps) {
    const link = `/blog/${title.toLowerCase().trim().split(" ").join("-")}`;

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 animate-slide-in-blurred-top">
            <Link to={link}>
                <img className="rounded-t-lg w-full object-fit ratio-1 " src={src} alt="" />
            </Link>
            <div className="flex flex-col justify-between items-start p-5">
                <div>
                    <Link to={link}>
                        <h5 className="h-16 mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {title}
                        </h5>
                    </Link>
                    <p className="mb-3 font-normal text-sm sm:text-base text-gray-700 dark:text-gray-400">
                        {description}
                    </p>
                </div>
                <div>
                    <Link
                        to={link}
                        className="transition-all ease-in-out hover:scale-110 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Read more
                        <svg
                            className="w-3.5 h-3.5 ml-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
