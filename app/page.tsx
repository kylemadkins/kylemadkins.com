import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import LatestPosts from "@/components/LatestPosts";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Testimonials />
      <LatestPosts />
      <Contact />
    </>
  );
}
