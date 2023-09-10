export default function PageHero({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <section className="flex flex-col gap-4 px-[8rem] py-[6rem] text-center">
      <h1 className="text-6xl leading-tight">{title}</h1>

      <p className="mx-auto max-w-[520px] text-xl font-light italic leading-relaxed">
        {content}
      </p>
    </section>
  );
}
