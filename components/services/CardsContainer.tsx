"use client";
import vetImage from "@/public/png/services/vet-image.png";
import petshopImage from "@/public/png/services/petshop-image.png";
import groomingImage from "@/public/png/services/grooming-image.png";
import { useState } from "react";
import ServiceCard, { iServiceCard } from "./ServiceCard";
import Carousel, { positionHandler } from "../utils/Carousel";
import PageMarker from "./PageMarker";

export default function CardsContainer() {
  const [cardsData, setCardsData] = useState<iServiceCard[]>([
    {
      id: 0,
      title: "veterinário",
      description:
        "Profissionais qualificados para o cuidado da saúde dos seus pets",
      detailedDescription:
        "O serviço veterinário é centrado no cuidado completo e contínuo, com foco na prevenção de doenças e no acompanhamento de todas as fases da vida do seu pet. Queremos construir uma vida mais saudável e feliz para quem você ama. E pra isso nós oferecemos:",
      subservices: [
        "✔ Check-ups regulares",
        "✔ Vacinação em dia",
        "✔ Exames laboratoriais",
        "✔ Acompanhamento personalizado",
        "✔ Orientação contínua",
      ],
      image: vetImage,
      color: "cerulean",
    },
    {
      id: 1,
      title: "banho e tosa",
      description:
        "deixe o seu pet cheiroso e arrumado com a nossa equipe de banho e tosa",
      detailedDescription:
        "O banho e tosa vão muito além da estética, são essenciais para a saúde e o bem-estar do seu pet. Nosso serviço é realizado por profissionais experientes especializados em:",
      subservices: [
        "✔ Banho Terapêutico",
        "✔ Tosa Higiênica e Estilizada",
        "✔ Higiene Completa",
      ],

      image: groomingImage,
      color: "tanjerina",
    },
    {
      id: 2,
      title: "petshop",
      description: "produtos diversos para o seu pet",
      detailedDescription:
        "Nosso petshop é muito mais do que uma loja — é uma extensão do nosso compromisso com o bem-estar e a qualidade de vida dos animais. Selecionamos cuidadosamente cada produto pensando na saúde, conforto e felicidade do seu pet, além da praticidade para você, tutor. Aqui você pode encontrar:",
      subservices: [
        "✔ Produtos para cuidados diários",
        "✔ Brinquedos e acessórios",
        "✔ Linha de saúde e bem-estar",
      ],
      image: petshopImage,
      color: "carot",
    },
  ]);
  const lastIndex = cardsData.length - 1;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden md:gap-5 sm:justify-around md:justify-center pt-5 px-2">
      <Carousel<iServiceCard>
        listWithId={cardsData}
        setList={setCardsData}
        className="h-55"
      >
        {cardsData.map((card) => (
          <ServiceCard
            key={`card${card.title}`}
            className={`absolute transition-all transition-discrete duration-300 ${positionHandler(
              card.id,
              lastIndex
            )}`}
            id={card.id}
            title={card.title}
            description={card.description}
            detailedDescription={card.detailedDescription}
            subservices={card.subservices}
            image={card.image}
            color={card.color}
          />
        ))}
      </Carousel>
      <PageMarker
        keyName="card"
        selectedColor={["bg-cerulean", "bg-tanjerina", "bg-carot"]}
        listWithId={cardsData}
      />
    </div>
  );
}
