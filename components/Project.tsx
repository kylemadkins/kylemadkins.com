import Link from "./icons/Link";

export default function Project({
  imageUrl,
  tags,
  title,
}: {
  imageUrl: string;
  tags: string[];
  title: string;
}) {
  return (
    <a className="project" href="#">
      <div className="imageContainer p-2 transition-all duration-500">
        <img
          className="aspect-video h-full w-full object-cover"
          src={imageUrl}
          alt=""
        />
      </div>
      <div className="mt-4 flex flex-col gap-6 p-2">
        <div className="flex flex-wrap gap-4">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="font-sansAlt tag border-borderColor text-2xs border-[1px] px-3 py-2 uppercase text-white transition-all duration-500"
            >
              # {tag}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl">{title}</h3>
          <div className="arrow transition-all duration-500">
            <Link className="h-6" />
          </div>
        </div>
      </div>
    </a>
  );
}
