import Link from "next/link";

import AltPost from "./AltPost";
import { Post as IPost } from "@/types/post";

export default function Posts({ posts }: { posts: IPost[] }) {
  return (
    <div className="grid grid-cols-3 gap-16 pt-[5rem]">
      {posts.map((post) => (
        <AltPost
          imageUrl={post.imageUrl}
          title={post.title}
          subtitle={post.subtitle}
          publishedAt={post.publishedAt}
          tags={post.tags || []}
        />
      ))}
    </div>
  );
}
