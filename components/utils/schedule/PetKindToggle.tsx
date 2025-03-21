"use client";
import { useState } from "react";

export default function PetKindToggle({}: {}) {
  const [selectedOption, setSelectedOption] = useState<string>();
  const getSelectedOption = (option: string) => {
    setSelectedOption(option);
  };

  const optionsList = [
    { name: "gato", color: "bg-red-500" },
    { name: "cachorro", color: "bg-orange-500" },
  ];
  return (
    <div className="flex gap-3 w-fit h-fit">
      {optionsList.map((option, idx) => (
        <div
          onClick={() => getSelectedOption(option.name)}
          className={`${option.color} relative rounded-full text-white text-lg w-26 text-center py-1`}
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
