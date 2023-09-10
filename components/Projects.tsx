import Project from "./Project";

export default function Projects() {
  return (
    <section className="px-[8rem] pb-[8rem]">
      <h2 className="flex items-center justify-between border-b-[1px] border-borderColor pb-5 font-sansAlt text-3xl uppercase">
        Projects
        <a className="text-xs text-white" href="#">
          See All
        </a>
      </h2>
      <div className="mx-[-0.75rem] grid grid-cols-2 gap-12 pt-[4rem]">
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
