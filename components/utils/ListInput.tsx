"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ListInput({
  optionsList,
  selectedValue,
  getSelectedOption,
  name
}: {
  name:string
  optionsList: string[];
  selectedValue: string;
  getSelectedOption: (key: string, value: string) => void;
}) {
  const [isInputOpen, setIsInputOpen] = useState<boolean>(false);

  return (
    <div className="w-fit h-fit relative" onClick={() => setIsInputOpen((old) => !old)}>
      <input
        defaultValue={selectedValue}
        className="max-w-(--input-max-w) w-[90dvw] h-10 rounded-lg bg-white capitalize focus:outline-hidden pl-2"
      />

      <OptionsList list={optionsList} isOpen={isInputOpen} chooseOption={(value:string)=>getSelectedOption(name,value)} />

      <div className="z-1 w-full h-full  absolute top-0 left-0 flex justify-end items-center">
        <ChevronDown
          className={`h-10 w-10 transition-transform ${isInputOpen && "rotate-180"}`}
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
      className={`w-full absolute overflow-auto transition-all top-full bg-white rounde z-2 ${
        isOpen ? "h-32" : "h-0"
      } `}
    >
      {list.map((option, idx) => (
        <li
          onClick={() => chooseOption(option)}
          key={`option${idx}`}
          className="hover:bg-neutral-400 py-2 px-1 border-b-1 border-b-zinc-200"
        >
          {option}
        </li>
      ))}
    </ul>
  );
}
