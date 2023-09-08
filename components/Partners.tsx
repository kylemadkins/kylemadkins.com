import Paramount from "./partners/Paramount";
import CrystalBridges from "./partners/CrystalBridges";
import Apptegy from "./partners/Apptegy";
import Few from "./partners/Few";

export default function Partners() {
  return (
    <section className="px-[8rem]">
      <h2 className="text-center font-sansAlt text-xs uppercase">
        Trusted by big companies, non-profits, and startups alike
      </h2>
      <div className="m-auto mt-12 flex flex-wrap items-center justify-center gap-x-[6rem] gap-y-10">
        <a href="#" target="_blank">
          <Paramount className="h-10 text-lightGray transition-all duration-500 hover:text-white" />
        </a>
        <a href="#" target="_blank">
          <CrystalBridges className="h-14 text-lightGray transition-all duration-500 hover:text-white" />
        </a>
        <a href="#" target="_blank">
          <Apptegy className="h-6 text-lightGray transition-all duration-500 hover:text-white" />
        </a>
        <a href="#" target="_blank">
          <Few className="h-16 text-lightGray transition-all duration-500 hover:text-white" />
        </a>
      </div>
    </section>
  );
}
