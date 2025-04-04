import SectoinTittle from "./utils/SectionTittle";
import { iServiceCard } from "./utils/services/ServiceCard";
import vetImage from "@/public/png/services/vet-image.png";
import petshopImage from "@/public/png/services/petshop-image.png";
import groomingImage from "@/public/png/services/grooming-image.png";
import CardsContainer from "./utils/services/CardsContainer";

export default function Services({}: {}) {
  const servicesList: iServiceCard[] = [
    {
      id: 0,
      tittle: "petshop",
      description: "produtos diversos para o seu pet",
      image: petshopImage,
      color: "carot",
    },
    {
      id: 1,
      tittle: "veterinário",
      description: "Profissionais qualificados para o cuidado da saúde dos seus pets",
      image: vetImage,
      color: "cerulean",
    },
    {
      id: 2,
      tittle: "banho e tosa",
      description:
        "deixe o seu pet cheiroso e arrumado com a nossa equipe de banho e tosa",
      image: groomingImage,
      color: "tanjerina",
    },
  ];

  return (
    <section className="py-4 flex flex-col gap-x-10" id="services">
      <SectoinTittle tittle="serviços" />
      <div className="w-full gap-2 md:gap-5 flex sm:justify-around md:justify-center pt-5 px-2 overflow-x-scroll snap-mandatory snap-x snap scroll-smooth scroll-hidden">
        <CardsContainer servicesList={servicesList} />
      </div>
    </section>
  );
}
