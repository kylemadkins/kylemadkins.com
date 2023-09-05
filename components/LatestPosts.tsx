export default function LatestPosts() {
  return (
    <section className="px-[8rem]">
      <h2 className="flex items-center justify-between border-b-[1px] border-borderColor py-5 font-sansAlt text-3xl uppercase">
        Latest Posts
        <a className="text-xs text-lighterGray" href="#">
          See All
        </a>
      </h2>
      <div className="grid grid-cols-3 gap-12 pb-[8rem] pt-[4rem]">
        <div>
          <div className="aspect-[3/2]">
            <img
              className="h-full w-full object-cover"
              src="/images/actioncable-pixel.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
