export default function Text({ content }: { content: string }) {
  return (
    <div
      className="prose-a:text-primaryGreen prose-headings:font-normal prose prose-lg prose-invert mx-auto font-light"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
