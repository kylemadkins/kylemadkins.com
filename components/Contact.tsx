export default function Contact() {
  return (
    <section className="px-[8rem]">
      <div className="grid grid-cols-2 gap-12 border-t-[1px] border-borderColor py-[6rem]">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-8">
            <div className="tag inline-flex self-start border-[1px] border-borderColor px-3 py-2 font-sansAlt text-2xs uppercase text-white transition-all duration-500">
              Get in Touch
            </div>
            <h2 className="text-5xl leading-tight">
              Like what you see?
              <br />
              <span className="text-primaryGreen">Let's work together.</span>
            </h2>
            <p className="max-w-[80%] text-lg font-light leading-relaxed">
              I'm always happy to help where I can. Feel free to connect with me
              on LinkedIn or email me at kylemadkins at gmail.com.
            </p>
          </div>
          <div className="flex gap-6 text-lighterGray">
            <a href="#">Github</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <form style={{ perspective: "30rem" }}>
          <div
            style={{ transform: "rotateY(-5deg)" }}
            className="contactForm flex flex-col gap-8"
          >
            <div className="grid grid-cols-2 gap-8">
              <input
                className="border-[1px] border-borderColor bg-transparent px-6 py-4 outline-none transition-all duration-500 focus:border-lighterGray"
                placeholder="Name"
              />
              <input
                className="border-[1px] border-borderColor bg-transparent px-6 py-4 outline-none transition-all duration-500 focus:border-lighterGray"
                placeholder="Email"
              />
            </div>
            <input
              className="border-[1px] border-borderColor bg-transparent px-6 py-4 outline-none transition-all duration-500 focus:border-lighterGray"
              placeholder="Subject"
            />
            <textarea
              className="min-h-[200px] border-[1px] border-borderColor bg-transparent px-6 py-4 outline-none focus:border-lighterGray"
              placeholder="Message"
            />
            <button className="submitButton relative border-[1px] border-borderColor bg-transparent p-5 font-sansAlt text-xs transition-all duration-500 hover:text-black">
              <span className="relative z-10">Send Message</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
