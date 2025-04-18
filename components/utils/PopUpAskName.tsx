"use client";

import { useCookies } from "next-client-cookies";
import { useState } from "react";

export default function PopUpAskName({}: {}) {
  const [isOpen, setIsOpen] = useState(true);
  const closePopUp = () => setIsOpen(false);

  const [name, setName] = useState("");
  const getName = (value: string) => {
    setName(value);
  };

  const cookies = useCookies();
  const saveName = () => {
    cookies.set("username", name);
    window.location.reload();
  };
  return (
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } animate-intro-opacity text-base bottom-2 right-1 z-5 border-2 border-neutral-400 w-fit h-fit rounded-xl shadow-xl p-4 flex flex-col items-center gap-3 bg-white`}
    >
      <h2 className="font-semibold ">Olá, poderia nos dizer o seu nome?</h2>
      <input
        onChange={(e) => getName(e.currentTarget.value)}
        onKeyDown={(e) => e.key == "Enter" && saveName()}
        className="w-60 px-3 py-1 placeholder:normal-case rounded-full border-2 border-neutral-500 text-neutral-500"
        placeholder="Insira seu nome aqui"
      />
      <div className="flex gap-10">
        <button
          onClick={closePopUp}
          className="text-red-400 text-base cursor-pointer"
        >
          Agora não...
        </button>

        <button
          onClick={saveName}
          className="py-1 px-4 font-medium text-lg text-white bg-emerald-500 hover:bg-emerald-700 transition-colors rounded-lg cursor-pointer"
        >
          Claro!
        </button>
      </div>
    </div>
  );
}
