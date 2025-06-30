import SectoinTittle from "../utils/SectionTittle";
import CardsContainer from "./CardsContainer";

export default function Services({}: {}) {
  return (
    <section className="py-4 flex flex-col gap-x-10 w-full" id="services">
      <SectoinTittle title="serviços" />
      <CardsContainer />
    </section>
  );
}
