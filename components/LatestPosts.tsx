export default function LatestPosts() {
  return (
    <section className="px-[8rem]">
      <h2 className="flex items-center justify-between border-b-[1px] border-borderColor py-5 font-sansAlt text-3xl uppercase">
        Latest Posts
        <a className="text-xs text-lighterGray" href="#">
          See All
        </a>
      </h2>
      <div className="grid grid-cols-2 gap-12 pb-[8rem] pt-[4rem]"></div>
    </section>
  );
}
