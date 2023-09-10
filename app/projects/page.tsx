import PageHero from "@/components/PageHero";
import Project from "@/components/Project";

export default function Blog() {
  return (
    <>
      <PageHero
        title="Projects"
        content="Welcome to my little corner of the Internet. Kick your feet up, grab a
        drink, and enjoy your stay."
      />
      <section className="px-[8rem] pb-[8rem]">
        <div className="mx-[-0.75rem] grid grid-cols-2 gap-8">
          <Project
            imageUrl="/images/crystal.jpeg"
            tags={["javascript", "nextjs", "nodejs"]}
            title="Crystal Bridges Museum of American Art"
          />
          <Project
            imageUrl="/images/schlep.jpeg"
            tags={["javascript", "vuejs", "rails"]}
            title="Schlep"
          />
        </div>
        <div className="mx-[-0.75rem] mt-12 grid grid-cols-3 gap-8">
          <Project
            imageUrl="/images/crystal.jpeg"
            tags={["javascript", "nextjs", "nodejs"]}
            title="Crystal Bridges Museum of American Art"
            small
          />
          <Project
            imageUrl="/images/schlep.jpeg"
            tags={["javascript", "vuejs", "rails"]}
            title="Schlep"
            small
          />
          <Project
            imageUrl="/images/crystal.jpeg"
            tags={["javascript", "nextjs", "nodejs"]}
            title="Crystal Bridges Museum of American Art"
            small
          />
        </div>
      </section>
    </>
  );
}
