import { LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useMemo } from "react";
import { getPost } from "~/utils/post";
import { getMDXComponent } from "mdx-bundler/client";
import styles from "highlight.js/styles/night-owl.css";
import BackButton from "~/components/BackButton/BackButton";

type LoaderData = {
  frontmatter: any;
  code: string;
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
    const { frontmatter, code } = post;
    return json({ frontmatter, code });
  } else {
    throw new Response("Not found", { status: 404 });
  }
}

export default function BlogPost() {
  const { code } = useLoaderData<LoaderData>();
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <div className="flex flex-col max-w-2xl m-auto text-base">
      <BackButton text="Read more articles" route="/blog" />
      <div className="prose dark:prose-invert py-10 prose-pre:bg-transparent prose-pre:p-0 prose-a:text-blue-500 hover:prose-a:text-blue-700 prose-a:no-underline prose-blockquote:">
        <Component />
      </div>
    </div>
  );
}
