import ProfileCard from "./ProfileCard";
import TypingText from "./TypingText";

export default function Hero() {
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
        </div>
      </div>
    </section>
  );
}
