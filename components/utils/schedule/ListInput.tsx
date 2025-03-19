"use client";
import { useState } from "react";

export default function ListInput({ optionsList }: { optionsList: string[] }) {
  const [isInputOpen, setIsInputOpen] = useState<boolean>(false);

  const [selectedValue, setSelectedValue] = useState<string>(optionsList[0]);
  const setSelectedOption = (selectedOption: string) => {
    setSelectedValue(selectedOption);
  };

  return (
    <div
      className="w-fit h-fit relative"
      onClick={() => setIsInputOpen((old) => !old)}
    >
      <input
        defaultValue={selectedValue}
        className="w-40 h-10 rounded-lg bg-white focus:outline-hidden pl-2"
      />

      <OptionsList list={optionsList} isOpen={isInputOpen} setValue={setSelectedOption} />
      <div className="z-1 w-full h-full p-10 absolute top-0 left-0"></div>
    </div>
  );
}

function OptionsList({
  list,
  isOpen,
  setValue,
}: {
  list: string[];
  isOpen: boolean;
  setValue: (value: string) => void;
}) {
  return (
    <ul
      className={`w-full absolute top-full bg-white rounded-lg z-10 ${
        isOpen ? "block" : "hidden"
      } `}
    >
      {list.map((option, idx) => (
        <li
          onClick={() => setValue(option)}
          id={`oprion${idx}`}
          key={`option${idx}`}
          className="hover:bg-neutral-400 py-2 px-1"
        >
          {option}
        </li>
      ))}
    </ul>
  );
}
