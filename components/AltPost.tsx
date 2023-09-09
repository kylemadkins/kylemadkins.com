import Link from "next/link";

export default function Alt({
  imageUrl,
  title,
  subtitle,
  publishedAt,
  tags,
}: {
  imageUrl: string;
  title: string;
  subtitle?: string;
  publishedAt: string;
  tags?: string[];
}) {
  return (
    <Link href="#" className="altPost block break-inside-avoid">
      <div className="aspect-[3/2]">
        <img className="h-full w-full object-cover" src={imageUrl} alt="" />
      </div>
      <div className="flex flex-col gap-6 py-10 transition-all duration-500">
        <div className="font-sansAlt text-xs uppercase text-lighterGray">
          {publishedAt}
        </div>
        <h3 className="title text-xl font-medium leading-snug transition-all duration-500">
          {title}
        </h3>
        {subtitle && subtitle.length ? (
          <h4 className="font-light">{subtitle}</h4>
        ) : (
          ""
        )}
        {tags && tags.length ? (
          <div className="mt-2 flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="tag border-[1px] border-borderColor px-2 py-1 font-sansAlt text-2xs uppercase text-white transition-all duration-500"
              >
                # {tag}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </Link>
  );
}
