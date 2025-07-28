"use client";
import { findGroomingByCode, iApiResponse } from "@/api/get";
import Popup from "@/components/appointments/Popup";
import WhatsappIcon from "@/public/icons/whatsapp";
import { LucideSearchCheck, LucideSearchX, X } from "lucide-react";
import { redirect } from "next/navigation";
import { useRef, useState } from "react";

export default function Acompanhamento({}: {}) {
  const codeInp = useRef<HTMLInputElement>(null);
  const popupMsg = useRef<HTMLInputElement>(null);
  const [apiResponse, setApiResponse] = useState<iApiResponse>();

  const searchCode = async () => {
    if (codeInp.current) {
      const data = await findGroomingByCode(codeInp.current.value);
      setApiResponse(data);
      if (popupMsg.current) popupMsg.current.textContent = data.msg;
      redirect("acompanhamento/2");
    }
  };
  return (
    <main className="w-full h-dvh flex flex-col justify-center items-center gap-4">
      <div className="w-[90%]">
        <h2 className="font-medium wrap text-tanjerina text-lg text-center">
          Quer estar por dentro de todo o nosso processo de banho e tosa?
        </h2>
        <p className="text-center text-base text-neutral-500">
          Digite o código de acesso e acompanhe de perto o banho do seu pet
        </p>
      </div>
      <input
        ref={codeInp}
        className="w-40 h-10 px-2 border-2 border-neutral-300 rounded-md "
        placeholder="Código de acesso"
      />

      <button
        onClick={searchCode}
        className="px-3 py-2 bg-ye bg-tanjerina hover:bg-carot rounded-md cursor-pointer text-white font-medium"
      >
        Confirmar
      </button>

      <a
        href="https://wa.me/5581992478819?text=Esqueci%20meu%20c%C3%B3digo"
        target="_blank"
        className="text-green-600 flex gap-2 font-medium cursor-pointer"
      >
        Esqueci meu código <WhatsappIcon className="size-6" />
      </a>
      {apiResponse &&
        (apiResponse.status == 200 ? (
          <Popup
            Icon={LucideSearchCheck}
            goodNews={true}
            msg={apiResponse.msg}
          />
        ) : (
          <Popup Icon={LucideSearchX} goodNews={false} msg={apiResponse.msg} />
        ))}
    </main>
  );
}
