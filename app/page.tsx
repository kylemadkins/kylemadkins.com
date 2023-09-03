import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="px-[8.5rem]">
        <Nav />
      </div>
      <div className="px-10">
        <div className="border-borderColor rounded-[15px] border-[1px] px-[6rem]">
          <main>
            <section className="grid grid-cols-3">
              <div
                style={{ perspective: "20rem" }}
                className="max-w-[360px] py-[6rem]"
              >
                <div
                  style={{ transform: "rotateY(7deg)" }}
                  className="border-borderColor self-start rounded-[5px] border-[1px] px-10 py-16 text-center"
                >
                  <h3 className="text-2xl">Kyle Adkins</h3>
                  <p>@kylemadkins</p>
                </div>
              </div>
              <div className="col-span-2 py-[8rem] pl-[6rem]">
                <h1 className="text-6xl leading-tight">
                  Hey! I'm{" "}
                  <span className="text-primaryGreen">Kyle Adkins</span>, a
                  Software Engineer and Creative Technologist.
                </h1>
              </div>
            </section>
          </main>
          <footer></footer>
        </div>
      </div>
    </div>
  );
}
