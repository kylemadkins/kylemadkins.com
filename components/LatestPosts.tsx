import Post from "./Post";

export default function LatestPosts() {
  return (
    <section className="px-[8rem]">
      <h2 className="flex items-center justify-between border-b-[1px] border-borderColor py-5 font-sansAlt text-3xl uppercase">
        Latest Posts
        <a className="text-xs text-lighterGray" href="#">
          See All
        </a>
      </h2>
      <div className="grid grid-cols-3 gap-12 pb-[16rem] pt-[4rem]">
        <Post
          imageUrl="/images/strings-pixel.png"
          title="Action Cable Authentication with JSON Web Tokens"
          publishedAt="12 Aug 2023"
          tags={["rails", "javascript", "websockets"]}
        />
        <Post
          imageUrl="/images/graffiti-pixel.png"
          title="Curating an Education"
          subtitle="How I forged a career without a degree"
          publishedAt="5 July 2023"
        />
        <Post
          imageUrl="/images/sphere-pixel.png"
          title="Functional Programming in C++"
          subtitle="With the Standard Template Library"
          publishedAt="1 July 2023"
          tags={["cpp"]}
        />
      </div>
    </section>
  );
}
