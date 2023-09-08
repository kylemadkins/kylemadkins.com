export default function ProfileCard() {
  return (
    <div style={{ perspective: "30rem" }}>
      <div
        style={{ transform: "rotateY(10deg)" }}
        className="self-start border-[1px] border-borderColor text-center"
      >
        <div className="relative aspect-[3/2] before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-10 before:bg-primaryGreen before:opacity-75 before:mix-blend-color before:content-['']">
          <img
            className="h-full w-full object-cover object-top"
            src="/images/me-pixel.png"
            alt="It's me"
          />
        </div>
        <div className="py-12">
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
    </div>
  );
}
