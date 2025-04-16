"use client";
import Wrapper from "../../Wrapper";

export default function GroomingModal({
  title,
  bgColor,
  detailedDescription,
  subservices,
  isOpen,
  toggle,
}: {
  title: string;
  detailedDescription: string;
  subservices: string[];
  bgColor: string;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <Wrapper
      isOpen={isOpen}
      toggle={toggle}
      className="text-white flex items-center justify-center"
    >
      <div
        className={`${bgColor} transition-all w-70 p-3 rounded-xl flex flex-col justify-around items-center overflow-hidden ${
          isOpen ? "h-60" : "h-0"
        }`}
      >
        <h2 className={`text-lg text-tanjerina font-bold uppercase relative`}>
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
      </div>
    </Wrapper>
  );
}
