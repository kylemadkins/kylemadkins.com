import Link from "next/link";

export default function Post({
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
    <Link
      href="#"
      className="post transition-all duration-500 hover:border-primaryGreen"
    >
      <div className="relative aspect-[3/2]">
        <img className="h-full w-full object-cover" src={imageUrl} alt="" />
        <div className="preview absolute left-6 right-6 top-[80%] border-[1px] border-borderColor bg-[#080C15] px-8 py-10 transition-all duration-500">
          <div className="font-sansAlt text-2xs uppercase text-lighterGray">
            {publishedAt}
          </div>
          <h3 className="mt-4 text-lg font-medium leading-tight">{title}</h3>
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
      </div>
    </Link>
  );
}
