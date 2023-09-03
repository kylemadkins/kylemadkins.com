import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <div className="px-10 pb-10">
        <div className="border-borderColor border-[1px]">
          <main>
            <Hero />
            <Projects />
          </main>
          <footer></footer>
        </div>
        <p className="mt-8 flex items-center justify-center text-center">
          &copy; {new Date().getFullYear()} Made with
          <img
            className="mx-1 inline-flex h-6"
            src="/icons/heart.svg"
            alt="Love"
          />
          by Kyle
        </p>
      </div>
    </div>
  );
}
