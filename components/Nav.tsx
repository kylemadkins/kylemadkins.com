"use client";

export default function Nav() {
  return (
    <nav>
      <div className="flex w-full items-center justify-between">
        <a className="logo icon-img-100" href="#">
          <h1 style={{ fontSize: "2rem" }}>Adkins</h1>
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
          {" "}
          {/*className="collapse navbar-collapse justify-content-center"*/}
          <ul className="flex gap-8 text-xs">
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

        <div style={{ perspective: "10rem" }} className="hidden md:flex">
          <a
            style={{ transform: "rotateX(20deg)" }}
            className="font-sansAlt rounded-[5px] bg-white px-6 py-3 text-xs text-black"
            href="#"
          >
            <span className="uppercase">Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
