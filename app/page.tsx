import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import LatestPosts from "@/components/LatestPosts";

export default function Home() {
  return (
    <>
      <Cursor />
      <div className="flex min-h-screen flex-col">
        <Nav />
        <div className="px-10 pb-10">
          <div className="border-borderColor border-[1px]">
            <main>
              <Hero />
              <Projects />
              <Testimonials />
              <LatestPosts />
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
    </>
  );
}
