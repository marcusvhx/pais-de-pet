"use client";
import { useState } from "react";
import Carousel, { positionHandler } from "../utils/Carousel";
import FeedbackCard, { iFeedbackData } from "./FeedbackCard";
import PageMarker from "../services/PageMarker";

export default function FeedbackContainer({}: {}) {
  const [feedbacksList, setFeedbacksList] = useState<iFeedbackData[]>([
    {
      id: 0,
      userName: "Débora Santos",
      comment:
        "O veterinário é nota mil! Os funcionários no local são acolhedores! Fui muito bem recebida e orientada. Nada do que eu disser é o suficiente para descrever o quanto esse lugar e esse veterinário são tops!.🩷💙",
      rate: 5,
      userPic:
        "https://lh3.googleusercontent.com/a-/ALV-UjXSlWpiOlek01oHCm6McMGaKUq9wlEON6bTunbH4oxOvh2Rx1ya7w=w150-h150-p-rp-mo-br100",
    },
    {
      id: 1,
      userName: "Geise Oliveira",
      comment: "Amei o atendimento como sempre! Super indico! Minha Pet amou",
      rate: 5,
      userPic:
        "https://lh3.googleusercontent.com/a-/ALV-UjXTKPKUw9bXaGJUGj_3A_Gl5Lgc0eK5cXp6drphmZ97SJVimT23=w150-h150-p-rp-mo-br100",
    },
    {
      id: 2,
      userName: "Elaine Pardinho",
      comment:
        "Amo o atendimento do Pais de Pet Candeias. Eles cuidam com muito amor da minha Cachorrinha. Já deve ter uns 2 anos que sempre levo ela lá. Desde os donos aos funcionários,  sempre muito educados e atenciosos. Super indico o trabalho deles.",
      rate: 5,
      userPic:
        "https://lh3.googleusercontent.com/a-/ALV-UjUGjSRxXVJokCwJsfMNH2ZNlP8WKNIf70v796xPmZDezRvrUvnEVw=w150-h150-p-rp-mo-br100",
    },
    {
      id: 3,
      userName: "Patricia Figueiredo",
      comment:
        "Um local onde minha Pet, é muito bem recebida!! Só elogios para o País de Pet, e ao Dr Cledson, com sua experiência e o ótimo atendimento que todos oferecem!!",
      rate: 5,
      userPic:
        "https://lh3.googleusercontent.com/a-/ALV-UjWUUcFj-u8PPQh8Ywu-nfYd3Zpwu_pBU4upt73OiSJGv4xN9mM=w150-h150-p-rp-mo-br100",
    },
  ]);
  const lastIndex = feedbacksList.length - 1;
  return (
    <div className="flex flex-col items-center w-full sm:w-[80dvw]">
      <Carousel<iFeedbackData>
        listWithId={feedbacksList}
        setList={setFeedbacksList}
        className="h-95 items-center mb-2 2xs:w-[90%] sm:w-full"
      >
        {feedbacksList.map((fb, idx) => (
          <FeedbackCard
            key={`feedback${idx}`}
            id={fb.id}
            className={`absolute transition-all transition-discrete duration-300 ${positionHandler(
              fb.id,
              lastIndex
            )}`}
            userName={fb.userName}
            userPic={fb.userPic}
            rate={fb.rate}
            comment={fb.comment}
          />
        ))}
      </Carousel>
      <PageMarker
        keyName="feedback"
        listWithId={feedbacksList}
        selectedColor={["bg-sky-250"]}
      />
    </div>
  );
}
