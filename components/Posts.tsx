import AltPost from "./AltPost";
import { Post as IPost } from "@/types/post";

export default function Posts({ posts }: { posts: IPost[] }) {
  return (
    <div className="mx-[-0.75rem] grid grid-cols-3 gap-16">
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
