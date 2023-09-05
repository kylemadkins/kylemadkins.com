import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Partners from "@/components/Partners";
import LatestPosts from "@/components/LatestPosts";
import Heart from "@/components/icons/Heart";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Cursor />
      <div className="flex min-h-screen flex-col">
        <Nav />
        <div className="px-10 pb-10">
          <div className="border-[1px] border-borderColor">
            <main>
              <Hero />
              <Projects />
              <Partners />
              <LatestPosts />
              <Contact />
            </main>
            <footer></footer>
          </div>
          <p className="mt-8 flex items-center justify-center text-center">
            &copy; {new Date().getFullYear()} Made with
            <Heart className="mx-1 inline-flex h-6" />
            by Kyle
          </p>
        </div>
      </div>
    </>
  );
}
