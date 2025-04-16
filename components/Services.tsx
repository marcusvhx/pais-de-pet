import SectoinTittle from "./utils/SectionTittle";
import { iServiceCard } from "./utils/services/ServiceCard";
import vetImage from "@/public/png/services/vet-image.png";
import petshopImage from "@/public/png/services/petshop-image.png";
import groomingImage from "@/public/png/services/grooming-image.png";
import CardsContainer from "./utils/services/CardsContainer";
import GroomingModal from "./utils/services/modals/GroomingModal";

export default function Services({}: {}) {
  const servicesList: iServiceCard[] = [
    {
      id: 0,
      title: "petshop",
      description: "produtos diversos para o seu pet",
      detailedDescriotion: "",
      subservices: [""],
      image: petshopImage,
      color: "carot",
    },
    {
      id: 1,
      title: "veterinário",
      description: "Profissionais qualificados para o cuidado da saúde dos seus pets",
      detailedDescriotion: "",
      subservices: [""],
      image: vetImage,
      color: "cerulean",
    },
    {
      id: 2,
      title: "banho e tosa",
      description:
        "deixe o seu pet cheiroso e arrumado com a nossa equipe de banho e tosa",
      detailedDescriotion:
        "O banho e tosa vão muito além da estética, são essenciais para a saúde e o bem-estar do seu pet. Nosso serviço é realizado por profissionais experientes especializados em",
      subservices: [
        "✔ Banho Terapêutico",
        "✔ Tosa Higiênica e Estilizada",
        "✔ Higiene Completa",
      ],

      image: groomingImage,
      color: "tanjerina",
    },
  ];
  return (
    <section className="py-4 flex flex-col gap-x-10" id="services">
      <SectoinTittle title="serviços" />
      <div className="w-full md:gap-5 flex sm:justify-around md:justify-center pt-5 px-2 overflow-x-scroll snap-mandatory snap-x snap scroll-smooth scroll-hidden">
        <CardsContainer servicesList={servicesList} />
      </div>
    </section>
  );
}
