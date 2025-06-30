"use client";
import { useState } from "react";

export default function PetKindToggle({
  defaultOption,
  getData,
  kindsList,
}: {
  defaultOption: string;
  getData: (key: string, value: string) => void;
  kindsList: { name: string; color: string }[];
}) {
  const [selectedOption, setSelectedOption] = useState<string>(defaultOption);
  const getSelectedOption = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex gap-3 w-fit h-fit">
      {kindsList.map((option, idx) => (
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
            data-selected={defaultOption !== option.name}
            className={`data-[selected=true]:bg-neutral-100/40 absolute w-full h-full top-0 rounded-full transition-colors`}
          />
        </div>
      ))}
    </div>
  );
}
