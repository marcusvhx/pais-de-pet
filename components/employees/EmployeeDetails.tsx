import Image from "next/image";
import { iEmployeeData } from "./EmployeeSlot";
import ModalWrapper from "../utils/ModalWrapper";
import { iGenericWrapper } from "../utils/GenericWrapper";

interface iEmployeeDetailsModal extends iEmployeeData, iGenericWrapper {}

export default function EmployeeDetailsModal({
  name,
  profession,
  description,
  bgColor,
  picture,
  isOpen,
  toggle,
}: iEmployeeDetailsModal) {
  return (
    <ModalWrapper isOpen={isOpen} toggle={toggle}>
      <div className="bg-background flex flex-col items-center rounded-xl w-[90dvw] p-2 ">
        <div className={`w-30 h-30 relative rounded-full overflow-hidden ${bgColor}`}>
          <Image
            src={picture}
            alt={name + " " + profession}
            fill
            className="object-cover object-top"
          />
        </div>
        <h2 className="font-semibold text-lg capitalize">{name}</h2>
        <p className="font-medium first-letter:uppercase">{profession}</p>
        <p className="text-base/5 my-2">{description}</p>
        <a
          href="#schedule"
          className={`${bgColor} text-lg font-medium text-white rounded-full py-1 px-3 `}
        >
          Agendar com {name}
        </a>
      </div>
    </ModalWrapper>
  );
}
