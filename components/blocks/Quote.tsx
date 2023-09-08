export default function Quote() {
  return (
    <blockquote className="prose prose-invert prose-lg mx-auto my-12 border-[1px] border-borderColor px-12 py-8 font-light">
      <p className="italic">
        No matter what language you work in, programming in a functional style
        provides benefits. You should do it whenever it is convenient, and you
        should think hard about the decision when it isn't convenient.
      </p>
      <footer className="font-sansAlt text-sm text-white">John Carmack</footer>
    </blockquote>
  );
}
