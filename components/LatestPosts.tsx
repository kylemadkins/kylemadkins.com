import Link from "next/link";

import Post from "./Post";
import { Post as IPost } from "@/types/post";

export default function LatestPosts({ posts }: { posts: IPost[] }) {
  return (
    <section className="px-[8rem] pb-[20rem]">
      <h2 className="flex items-center justify-between border-b-[1px] border-borderColor pb-5 font-sansAlt text-3xl uppercase">
        Latest Posts
        <Link href="/blog" className="text-xs text-white">
          See All
        </Link>
      </h2>
      <div className="grid grid-cols-3 gap-x-12 gap-y-[calc(3rem+13rem)] pt-[5rem]">
        {posts.map((post) => (
          <Post
            imageUrl={post.imageUrl}
            title={post.title}
            subtitle={post.subtitle}
            publishedAt={post.publishedAt}
            tags={post.tags || []}
          />
        ))}
      </div>
    </section>
  );
}
