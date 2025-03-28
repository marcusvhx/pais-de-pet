import SectoinTittle from "./utils/SectionTittle";
import ServiceCard, { iServiceCard } from "./utils/services/ServiceCard";
import vetImage from "@/public/png/services/vet-image.png";
import petshopImage from "@/public/png/services/petshop-image.png";
import groomingImage from "@/public/png/services/grooming-image.png";

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
  // sistema de setas, percebi q isso é desnecessario
  // const servicesListLastIndex = servicesList.length - 1;
  // const [currentService, setCurrentService] = useState(0);
  // const next = () => {
  //   currentService == servicesListLastIndex
  //     ? setCurrentService(() => 0)
  //     : setCurrentService((old) => old + 1);
  // };
  // const prev = () => {
  //   currentService == 0
  //     ? setCurrentService(() => servicesListLastIndex)
  //     : setCurrentService((old) => old - 1);
  // };

  return (
    <section className="py-4 flex flex-col gap-x-10" id="services">
      <SectoinTittle tittle="serviços" />
      <div className="w-full gap-2 md:gap-5 flex sm:justify-around md:justify-center pt-5 px-2 overflow-x-scroll snap-mandatory snap-x snap scroll-smooth scroll-hidden">
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
      {/* <div className="hidden md:flex justify-around w-full">
        <a
          href={`#${servicesList[currentService].id}`}
          onClick={prev}
          className="w-fit h-fit"
        >
          <ChevronLeftCircleIcon className="z-2 w-10 h-10" />
        </a>

        <a
          href={`#${servicesList[currentService].id}`}
          onClick={next}
          className="w-fit h-fit"
        >
          <ChevronRightCircleIcon className="z-2 w-10 h-10" />
        </a>
      </div> */}
    </section>
  );
}
