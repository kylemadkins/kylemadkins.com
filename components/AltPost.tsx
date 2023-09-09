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
    <Link href="#" className="altPost mb-16 block break-inside-avoid">
      <div className="aspect-[3/2]">
        <img className="h-full w-full object-cover" src={imageUrl} alt="" />
      </div>
      <div className="px-10 py-12 transition-all duration-500">
        <div className="font-sansAlt text-2xs uppercase text-lighterGray">
          {publishedAt}
        </div>
        <h3 className="title mt-4 text-lg font-medium leading-tight transition-all duration-500">
          {title}
        </h3>
        {subtitle && subtitle.length ? (
          <h4 className="mt-4 font-light">{subtitle}</h4>
        ) : (
          ""
        )}
        {tags && tags.length ? (
          <div className="mt-6 flex flex-wrap gap-2">
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