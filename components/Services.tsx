"use client";
import SectoinTittle from "./utils/SectionTittle";
import ServiceCard, { iServiceCard } from "./utils/services/ServiceCard";
import vetImage from "@/public/png/services/vet-image.png";
import petshopImage from "@/public/png/services/petshop-image.png";
import groomingImage from "@/public/png/services/grooming-image.png";
import { ChevronLeftCircleIcon, ChevronRightCircleIcon } from "lucide-react";
import { useState } from "react";

export default function Services({}: {}) {
  const servicesList: iServiceCard[] = [
    {
      id: "petshop",
      tittle: "petshop",
      description: "produtos diversos para o seu pet",
      image: petshopImage,
      color: "carot",
    },
    {
      id: "vet",
      tittle: "veterinário",
      description: "Profissionais qualificados para o cuidado da saúde dos seus pets",
      image: vetImage,
      color: "cerulean",
    },
    {
      id: "grooming",
      tittle: "banho e tosa",
      description:
        "deixe o seu pet cheiroso e arrumado com a nossa equipe de banho e tosa",
      image: groomingImage,
      color: "tanjerina",
    },
  ];
  return (
    <section className="flex flex-col gap-2" id="services">
      <SectoinTittle tittle="serviços" />
      <div className="carousel carousel-center self-center w-full pt-5 px-2 gap-2">
        {servicesList.map((service, idx) => (
          <ServiceCard
            id={service.id}
            key={`service${idx}`}
            image={service.image}
            tittle={service.tittle}
            description={service.description}
            color={service.color}
          />
        ))}
      </div>
      <div className="flex justify-around w-full">
        <ChevronLeftCircleIcon className="z-2 w-10 h-10" />
        <ChevronRightCircleIcon className="z-2 w-10 h-10" />
      </div>
    </section>
  );
}
