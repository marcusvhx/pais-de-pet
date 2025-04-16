"use client";
import { useState } from "react";
import ServiceCard, { iServiceCard } from "./ServiceCard";
import PageMarker from "./PageMarker";
import { ChevronLeft } from "lucide-react";

export default function CardsContainer({
  servicesList,
}: {
  servicesList: iServiceCard[];
}) {
  const [cardsData, setCardsData] = useState<iServiceCard[]>(servicesList);
  const lastIndex = servicesList.length - 1;

  const next = () => {
    console.log(cardsData);
    const tempHolder = cardsData.map((card) => {
      const newId = card.id == 0 ? lastIndex : card.id - 1;
      return { ...card, id: newId };
    });

    setCardsData(() => tempHolder);
  };

  const prev = () => {
    const tempHolder = cardsData.map((card) => {
      const newId = card.id == lastIndex ? 0 : card.id + 1;
      return { ...card, id: newId };
    });

    setCardsData(() => tempHolder);
  };
  const positionHandler = (reference: number) => {
    switch (reference) {
      case 0:
        return "drop-shadow-xl/50 -top-2 left-1/2 -translate-x-1/2 z-3";
      case 1:
        return "blur-xs opacity-60 z-2 top-1/2 left-[calc(50%+(220px-50px))] -translate-1/2";
      case lastIndex:
        return "blur-xs opacity-60 z-2 top-1/2 left-[calc(50%-(220px-50px))] -translate-1/2";
      default:
        return "opacity-0 z-1 left-[calc(50%+(220px-50px))] -translate-x-1/2";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex w-full h-55 overflow-hiddeen relative">
        {cardsData.map((card) => (
          <ServiceCard
            key={`card-${card.title}`}
            className={`absolute transition-all transition-discrete duration-300
            ${positionHandler(card.id)}`}
            id={card.id}
            title={card.title}
            description={card.description}
            detailedDescription={card.detailedDescription}
            subservices={card.subservices}
            image={card.image}
            color={card.color}
          />
        ))}
        <ChevronLeft
          onClick={prev}
          className="h-10 w-10 pr-1 bg-black/30 text-white rounded-full absolute top-1/2 -translate-y-1/2 left-0 z-4"
        />
        <ChevronLeft
          onClick={next}
          className="h-10 w-10 pr-1 bg-black/30 text-white rounded-full absolute top-1/2 -translate-y-1/2 right-0 z-4 rotate-180"
        />
      </div>
      <PageMarker cardsList={cardsData} />
    </div>
  );
}
