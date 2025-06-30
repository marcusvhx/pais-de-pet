"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ListInput({
  optionsList,
  selectedOption,
  getSelectedOption,
  name,
}: {
  name: string;
  optionsList: string[];
  selectedOption: string;
  getSelectedOption: (key: string, value: string) => void;
}) {
  const [isInputOpen, setIsInputOpen] = useState<boolean>(false);

  return (
    <div
      className="w-full h-fit relative cursor-pointer"
      onClick={() => setIsInputOpen((old) => !old)}
    >
      <input
        defaultValue={selectedOption}
        className={`w-full h-10 rounded-lg bg-white capitalize focus:outline-hidden pl-2`}
      />

      <OptionsList
        list={optionsList}
        isOpen={isInputOpen}
        chooseOption={(value: string) => getSelectedOption(name, value)}
      />

      <div className="z-1 w-full h-full  absolute top-0 right-1 flex justify-end items-center">
        <ChevronDown
          className={`h-7 w-7 text-zinc-700 transition-transform ${
            isInputOpen && "rotate-180"
          }`}
        />
      </div>
    </div>
  );
}

function OptionsList({
  list,
  isOpen,
  chooseOption,
}: {
  list: string[];
  isOpen: boolean;
  chooseOption: (value: string) => void;
}) {
  return (
    <ul
      className={`w-full absolute overflow-auto transition-all top-[105%] bg-white rounde z-2 rounded-lg ${
        isOpen ? "h-fit" : "h-0"
      } `}
    >
      {list.map((option, idx) => (
        <li
          onClick={() => chooseOption(option)}
          key={`option${idx}`}
          className="hover:bg-neutral-400 text-center py-2 h-11 px-1 border-b-1 border-b-zinc-200 capitalize"
        >
          {option}
        </li>
      ))}
    </ul>
  );
}
