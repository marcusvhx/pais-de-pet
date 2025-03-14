import SectoinTittle from "./utils/SectionTittle";
import ServiceCard from "./utils/services/ServiceCard";
import vetImage from "@/public/png/services/vet-image.png";
export default function Services({}: {}) {
  return (
    <section>
      <SectoinTittle tittle="serviços" />
      <div className="flex gap-2">
        <ServiceCard image={vetImage} />
      </div>
    </section>
  );
}
