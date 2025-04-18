"use client";
import { useState } from "react";

export default function PetKindToggle({
  getData,
}: {
  getData: (key: string, value: string) => void;
}) {
  const [selectedOption, setSelectedOption] = useState<string>();
  const getSelectedOption = (option: string) => {
    setSelectedOption(option);
  };

  const optionsList = [
    { name: "gato", color: "bg-red-400" },
    { name: "cachorro", color: "bg-orange-400" },
  ];
  return (
    <div className="flex gap-3 w-fit h-fit">
      {optionsList.map((option, idx) => (
        <div
          onClick={() => {
            getSelectedOption(option.name);
            getData("petKind", option.name);
          }}
          className={`${option.color} capitalize relative rounded-full text-white text-lg  grid place-items-center w-26 py-1 cursor-pointer`}
          key={`toggleOption${idx}`}
        >
          {option.name}

          <div
            className={`${
              selectedOption != option.name && "bg-neutral-100/40"
            } absolute w-full h-full top-0 rounded-full transition-colors`}
          />
        </div>
      ))}
    </div>
  );
}
