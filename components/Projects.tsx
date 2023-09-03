import Project from "./Project";

export default function Projects() {
  return (
    <section className="px-[8rem] pb-[8rem]">
      <h2 className="mb-6 text-4xl">Projects</h2>
      <div className="mt-[4rem] grid grid-cols-2 gap-12">
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
    </section>
  );
}
