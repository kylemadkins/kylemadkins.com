"use client";

import { useRef, useEffect } from "react";
import Typed from "typed.js";

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
    <section className="grid grid-cols-3 px-[6rem]">
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

        <div className="mt-[6rem] flex gap-16">
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
              className="font-pixel border-borderColor inline-flex gap-2 border-[1px] px-6 py-4 text-sm"
              href="#"
            >
              <img className="h-6" src="/icons/download.svg" alt="" />
              <span className="uppercase">Resume</span>
            </a>
          </div>
        </div>

        <div className="mt-[6rem] flex flex-wrap gap-8 text-5xl opacity-10">
          <i className="devicon-html5-plain"></i>
          <i className="devicon-css3-plain"></i>
          <i className="devicon-typescript-plain"></i>
          <i className="devicon-react-plain"></i>
          <i className="devicon-python-plain"></i>
          <i className="devicon-php-plain"></i>
          <i className="devicon-postgresql-plain"></i>
          <i className="devicon-graphql-plain"></i>
          <i className="devicon-go-original-wordmark"></i>
          <i className="devicon-git-plain"></i>
          <i className="devicon-cplusplus-plain"></i>
          <i className="devicon-csharp-plain"></i>
          <i className="devicon-docker-plain"></i>
          <i className="devicon-jira-plain"></i>
          <i className="devicon-unity-original"></i>
        </div>
      </div>
    </section>
  );
}
