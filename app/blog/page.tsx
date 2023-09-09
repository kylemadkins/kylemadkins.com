import BlogHero from "@/components/BlogHero";
import Posts from "@/components/Posts";

export default function Blog() {
  return (
    <>
      <BlogHero />
      <section className="px-[8rem] pb-[8rem]">
        <Posts
          posts={[
            {
              imageUrl: "/images/strings-pixel.png",
              title: "Action Cable Authentication with JSON Web Tokens",
              publishedAt: "12 Aug 2023",
              tags: ["rails", "javascript", "websockets"],
            },
            {
              imageUrl: "/images/graffiti-pixel.png",
              title: "Curating an Education",
              subtitle: "How I forged a career without a degree",
              publishedAt: "5 July 2023",
            },
            {
              imageUrl: "/images/sphere-pixel.png",
              title: "Functional Programming in C++",
              subtitle: "With the Standard Template Library",
              publishedAt: "1 July 2023",
              tags: ["cpp"],
            },
            {
              imageUrl: "/images/sphere-pixel.png",
              title: "Functional Programming in C++",
              subtitle: "With the Standard Template Library",
              publishedAt: "1 July 2023",
              tags: ["cpp"],
            },
            {
              imageUrl: "/images/sphere-pixel.png",
              title: "Functional Programming in C++",
              subtitle: "With the Standard Template Library",
              publishedAt: "1 July 2023",
              tags: ["cpp"],
            },
          ]}
        />
      </section>
    </>
  );
}
