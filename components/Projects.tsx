import Project from "./Project";

export default function Projects() {
  return (
    <section className="px-[8rem] py-[2rem]">
      <h2 className="font-sansAlt border-borderColor border-b-[1px] py-5 text-3xl uppercase">
        Projects
      </h2>
      <div className="grid grid-cols-2 gap-12 pb-[8rem] pt-[4rem]">
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
