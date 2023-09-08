import Testimonial from "./Testimonial";
import Partners from "./Partners";

export default function Testimonials() {
  return (
    <section className="px-[8rem] pb-[8rem]">
      <h2 className="border-b-[1px] border-borderColor py-5 font-sansAlt text-3xl uppercase">
        Testimonials
      </h2>
      <div className="grid grid-cols-2 gap-12 pt-[4rem]">
        <Testimonial
          imageUrl="/images/megan.jpeg"
          name="Megan Lewis"
          title="UX Designer at Tyson Foods"
          testimonial="A fellow engineer with a passion to create! Kyle can see through a process and tap into innovative ways to approach upcoming challenges. He is a wonderful teammate that I enjoy creating and collaborating with."
        />
      </div>
      <div className="pt-[6rem]">
        <Partners />
      </div>
    </section>
  );
}
