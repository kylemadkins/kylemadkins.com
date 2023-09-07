import ProfileCard from "./ProfileCard";
import Download from "./icons/Download";
import Skill from "./Skill";
import TypingText from "./TypingText";

export default function Hero() {
  return (
    <section className="grid grid-cols-3 px-[8rem]">
      <div className="max-w-[360px] py-[6rem]">
        <ProfileCard />
      </div>
      <div className="col-span-2 py-[8rem] pl-[6rem]">
        <h1 className="text-6xl leading-tight">
          Hey! I'm <TypingText text="Kyle Adkins" />, a Software Engineer and
          Creative Technologist.
        </h1>

        <p className="mt-10 max-w-[520px] text-lg font-light leading-relaxed">
          Welcome to my little corner of the Internet. Kick your feet up, grab a
          drink, and enjoy your stay.
        </p>

        <div className="mt-8 flex gap-16">
          <div className="flex items-center gap-4">
            <div className="font-pixel text-8xl">
              {new Date().getFullYear() - new Date(2017, 0, 1).getFullYear()}
            </div>
            <div>
              years of
              <br />
              experience
            </div>
          </div>

          <div className="self-center">
            <a
              className="inline-flex items-center gap-2 border-[1px] border-borderColor px-6 py-3 font-sansAlt text-xs transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              href="#"
            >
              <Download className="h-6" />
              <span className="uppercase">Resume</span>
            </a>
          </div>
        </div>

        <div className="mt-[6rem] flex flex-wrap gap-8 text-5xl">
          {[
            "devicon-html5-plain",
            "devicon-css3-plain",
            "devicon-typescript-plain",
            "devicon-react-plain",
            "devicon-python-plain",
            "devicon-php-plain",
            "devicon-postgresql-plain",
            "devicon-graphql-plain",
            "devicon-go-original-wordmark",
            "devicon-git-plain",
            "devicon-cplusplus-plain",
            "devicon-csharp-plain",
            "devicon-docker-plain",
            "devicon-jira-plain",
            "devicon-unity-original",
          ].map((icon) => (
            <Skill key={icon} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
