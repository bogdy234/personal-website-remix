import { useLoaderData } from "@remix-run/react";
import BlogCard from "~/components/BlogCard/BlogCard";
import { PostAttributes } from "~/types/post-attributes";
import { getPosts } from "~/utils/post";

interface LoaderData {
  posts: PostAttributes[];
}

export async function loader(): Promise<LoaderData> {
  const posts = await getPosts();

  return { posts };
}

export default function BlogIndex() {
  const { posts } = useLoaderData<LoaderData>();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
      {posts?.map((p) => (
        <BlogCard
          src={p.image}
          title={p.title}
          description={p.description}
          key={p.title}
        />
      ))}
    </div>
  );
}