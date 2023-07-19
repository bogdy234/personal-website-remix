import { LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useMemo } from "react";
import { getPost } from "~/utils/blog-post";
import { getMDXComponent } from "mdx-bundler/client";
import styles from "highlight.js/styles/night-owl.css";
import BackButton from "~/components/BackButton/BackButton";
import { formatDate } from "~/utils/date";
import Alert from "~/components/Alert";
import InfoMessage from "~/components/InfoMessage";

type LoaderData = {
    frontmatter: any;
    code: string;
    readTime: {
        text: string;
        minutes: number;
        time: number;
        words: number;
    };
};

export const links = () => {
    return [
        {
            rel: "stylesheet",
            href: styles,
        },
    ];
};

export async function loader({ params }: LoaderArgs) {
    if (!params.title) {
        throw new Response("Not found", { status: 404 });
    }
    const post = await getPost(params.title);
    if (post) {
        return json(post);
    } else {
        throw new Response("Not found", { status: 404 });
    }
}

const Components = { Alert, InfoMessage };

export default function BlogPost() {
    const { code, frontmatter, readTime } = useLoaderData<LoaderData>();
    const Component = useMemo(() => getMDXComponent(code), [code]);

    return (
        <div className="flex flex-col max-w-2xl m-auto text-base">
            <div>
                <BackButton text="Read more articles" route="/blog" />
            </div>
            <div className="text-3xl font-bold mt-10">{frontmatter.title}</div>
            <div className="text-base text-gray-500 mt-2 font-bold">{`${formatDate(frontmatter.date)} - ${
                readTime.text
            }`}</div>
            <div className="prose dark:prose-invert py-10 prose-pre:bg-transparent prose-pre:p-0 prose-a:text-blue-500 hover:prose-a:text-blue-700 prose-a:no-underline prose-blockquote:">
                <Component components={{ ...Components }} />
            </div>
        </div>
    );
}
