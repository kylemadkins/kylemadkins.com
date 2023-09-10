import Link from "next/link";

export default function Project({
  imageUrl,
  tags,
  title,
  small = false,
}: {
  imageUrl: string;
  tags: string[];
  title: string;
  small?: boolean;
}) {
  return (
    <Link className="project" href="#">
      <div
        className={`imageContainer ${
          small ? "aspect-[3/2]" : "aspect-video"
        } p-3 transition-all duration-500`}
      >
        <img className="h-full w-full object-cover" src={imageUrl} alt="" />
      </div>
      <div className="mt-4 flex flex-col gap-5 p-3">
        <div className="flex flex-wrap gap-4">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="tag border-[1px] border-borderColor px-2 py-1 font-sansAlt text-2xs uppercase text-white transition-all duration-500"
            >
              # {tag}
            </div>
          ))}
        </div>
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
    </Link>
  );
}
