import Link from "next/link";

export default function Nav() {
  return (
    <nav className="px-10 py-4">
      <div className="flex w-full items-center justify-between px-[8rem]">
        <Link href="/" className="logo icon-img-100">
          <h1 className="flex items-center gap-2 font-pixel text-3xl font-bold">
            Adkins
          </h1>
        </Link>
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
              <Link
                href="/about"
                className="inline-flex py-5 font-sansAlt leading-8"
              >
                <span>About</span>
              </Link>
            </li>
            <li className="uppercase">
              <Link
                href="/projects"
                className="inline-flex py-5 font-sansAlt leading-8"
              >
                <span>Projects</span>
              </Link>
            </li>
            <li className="uppercase">
              <Link
                href="/blog"
                className="inline-flex py-5 font-sansAlt leading-8"
              >
                <span>Blog</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <Link
            className="inline-flex border-[1px] border-white bg-white px-6 py-3 font-sansAlt text-xs text-black transition-all duration-300 hover:border-borderColor hover:bg-transparent hover:text-white"
            href="/#contact"
          >
            <span className="uppercase">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
