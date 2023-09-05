import Paramount from "./partners/Paramount";
import CrystalBridges from "./partners/CrystalBridges";
import Apptegy from "./partners/Apptegy";
import Few from "./partners/Few";
import Tyler from "./partners/Tyler";

export default function Partners() {
  return (
    <section className="px-[8rem] pb-[3rem]">
      <h2 className="py-5 text-center font-sansAlt text-xs uppercase">
        Trusted by big companies, non-profits, and startups alike
      </h2>
      <div className="m-auto flex flex-wrap items-center justify-center gap-x-[4rem] gap-y-10 pb-[8rem] pt-[2rem]">
        <a href="#" target="_blank">
          <Paramount className="h-11 text-lightGray transition-all duration-500 hover:text-white" />
        </a>
        <a href="#" target="_blank">
          <CrystalBridges className="h-14 text-lightGray transition-all duration-500 hover:text-white" />
        </a>
        <a href="#" target="_blank">
          <Apptegy className="h-7 text-lightGray transition-all duration-500 hover:text-white" />
        </a>
        <a href="#" target="_blank">
          <Few className="h-16 text-lightGray transition-all duration-500 hover:text-white" />
        </a>
        <a href="#" target="_blank">
          <Tyler className="h-12 text-lightGray transition-all duration-500 hover:text-white" />
        </a>
      </div>
    </section>
  );
}
