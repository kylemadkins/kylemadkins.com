import Project from "./Project";

export default function Projects() {
  return (
    <section className="px-[8rem] py-[2rem]">
      <h2 className="flex items-center justify-between border-b-[1px] border-borderColor py-5 font-sansAlt text-3xl uppercase">
        Projects
        <a className="text-xs text-lighterGray" href="#">
          See All
        </a>
      </h2>
      <div className="grid grid-cols-2 gap-12 pb-[8rem] pt-[4rem]">
        <Project
          imageUrl="/images/crystal-pixel.png"
          tags={["javascript", "nextjs", "nodejs"]}
          title="Crystal Bridges Museum of American Art"
        />
        <Project
          imageUrl="/images/schlep-pixel.png"
          tags={["javascript", "vuejs", "rails"]}
          title="Schlep"
        />
      </div>
    </section>
  );
}
