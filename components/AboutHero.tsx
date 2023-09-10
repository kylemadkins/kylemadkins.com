import ProfileCard from "./ProfileCard";
import TypingText from "./TypingText";

export default function AboutHero() {
  return (
    <section className="grid grid-cols-3 px-[8rem] py-[8rem]">
      <div className="max-w-[360px]">
        <ProfileCard />
      </div>
      <div className="col-span-2 pl-[6rem]">
        <h1 className="text-6xl leading-tight">
          Hey! I'm <TypingText text="Kyle Adkins" />, a Software Engineer and
          Creative Technologist.
        </h1>

        <div className="prose prose-lg prose-invert mt-10 font-light prose-headings:font-normal prose-a:font-normal prose-a:text-primaryGreen">
          <p>
            I'm interested in web services, graphics, game dev, virtual and
            augmented reality, art, and all other creative applications of
            technology. I have a passion for devising simple solutions to
            complex problems.
          </p>

          <p>
            If you're interested in learning more about my career and technical
            ability, check out my{" "}
            <a href="https://www.linkedin.com/in/kylemadkins/">LinkedIn</a> or
            read some of the things that I've written <a href="/blog">here</a>.
          </p>

          <p>If you want to get to know me personally, keep reading!</p>
        </div>
      </div>
    </section>
  );
}
