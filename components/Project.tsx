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
    <a className="project flex aspect-video flex-col gap-6" href="#">
      <img
        className="h-full w-full object-cover transition-all duration-500"
        src={imageUrl}
        alt=""
      />
      <div className="mt-2 flex flex-wrap gap-4">
        {tags.map((tag) => (
          <div className="tag text-lighterGray border-borderColor border-[1px] px-3 py-1 text-sm transition-all duration-500">
            # {tag}
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <h3 className="text-2xl">{title}</h3>
        <div className="arrow transition-all duration-500">
          <Link className="h-6" />
        </div>
      </div>
    </a>
  );
}
