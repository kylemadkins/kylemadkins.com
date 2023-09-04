"use client";

export default function Nav() {
  return (
    <nav className="px-10 py-4">
      <div className="flex w-full items-center justify-between">
        <a className="logo icon-img-100" href="#">
          <h1 className="font-pixel flex items-center gap-2 text-3xl font-bold">
            Adkins
          </h1>
        </a>
        <button
          className="md:hidden"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>
        <div>
          {/*className="collapse navbar-collapse justify-content-center"*/}
          <ul className="flex gap-12 text-xs">
            <li className="uppercase">
              <a className="font-sansAlt inline-flex py-5 leading-8" href="#">
                <span>About</span>
              </a>
            </li>
            <li className="uppercase">
              <a className="font-sansAlt inline-flex py-5 leading-8" href="#">
                <span>Projects</span>
              </a>
            </li>
            <li className="uppercase">
              <a className="font-sansAlt inline-flex py-5 leading-8" href="#">
                <span>Blog</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <a
            className="font-sansAlt hover:border-borderColor inline-flex border-[1px] border-white bg-white px-6 py-3 text-xs text-black transition-all duration-300 hover:bg-transparent hover:text-white"
            href="#"
          >
            <span className="uppercase">Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
