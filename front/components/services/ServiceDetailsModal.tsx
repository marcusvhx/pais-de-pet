import ModalWrapper from "../utils/ModalWrapper";

export default function ServiceDetailModal({
  title,
  bgColor,
  detailedDescription,
  subservices,
  isOpen,
  toggle,
  textColor,
}: {
  title: string;
  detailedDescription: string;
  subservices: string[];
  bgColor: string;
  isOpen: boolean;
  toggle: () => void;
  textColor: string;
}) {
  return (
    <ModalWrapper isOpen={isOpen} toggle={toggle}>
      <div
        className={`${bgColor} text-white w-72 h-fit rounded-xl flex flex-col gap-2 justify-around items-center p-2`}
      >
        <h2 className={`text-lg ${textColor} font-bold uppercase relative`}>
          <p className="text-lg font-bold uppercase text-white absolute top-0.5">
            {title}
          </p>
          {title}
        </h2>
        <p className="text-sm">{detailedDescription}</p>
        <ul className="w-full">
          {subservices.map((service, idx) => (
            <li key={service + idx}>{service}</li>
          ))}
        </ul>
        <a
          className="px-3 py-2 rounded-full bg-black/20 hover:bg-neutral-500"
          href="#schedule"
        >
          agendar serviço
        </a>
      </div>
    </ModalWrapper>
  );
}
