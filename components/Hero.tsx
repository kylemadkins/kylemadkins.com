"use client";

import { useRef, useEffect } from "react";
import Typed from "typed.js";

import Skill from "./Skill";
import Download from "./icons/Download";

export default function Hero() {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ["Kyle Adkins"],
      typeSpeed: 50,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="grid grid-cols-3 px-[8rem]">
      <div className="max-w-[360px] py-[6rem]">
        <div className="border-borderColor self-start border-[1px] px-10 py-16 text-center">
          <h3 className="text-2xl leading-4">Kyle Adkins</h3>
          <p className="mt-5 leading-4">@kylemadkins</p>
          <div className="mt-5 flex items-center justify-center gap-4">
            <a href="#">
              <img className="h-6" src="/icons/github.svg" alt="Github" />
            </a>
            <a href="#">
              <img className="h-6" src="/icons/linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-2 py-[8rem] pl-[6rem]">
        <h1 className="text-6xl leading-tight">
          Hey! I'm <span ref={typedEl} className="text-primaryGreen"></span>, a
          Software Engineer and Creative Technologist.
        </h1>

        <p className="mt-12 max-w-[520px] text-lg font-light">
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
              className="font-sansAlt border-borderColor inline-flex items-center gap-2 border-[1px] px-6 py-3 text-xs transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
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
