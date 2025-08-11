"use client";
import { getAppointment, iAppointment } from "@/api/get";
import Popup from "@/components/appointments/Popup";
import WhatsappIcon from "@/public/icons/whatsapp";
import { LucideSearchX } from "lucide-react";
import { redirect } from "next/navigation";
import { useRef, useState } from "react";

interface ErrorPopup {
  isError: boolean;
  msg: string;
}

export default function Acompanhamento({}: {}) {
  const codeInp = useRef<HTMLInputElement>(null);
  const [errorMsg, setErrorMsg] = useState<ErrorPopup>();
  const searchCode = async () => {
    if (codeInp.current) {
      const code = codeInp.current.value.toUpperCase();
      const { data, status, msg } = await getAppointment(code);

      if (status > 200 && msg) {
        setErrorMsg({
          isError: true,
          msg,
        });

        setTimeout(() => {
          setErrorMsg({ isError: false, msg: "" });
          codeInp.current?.focus();
        }, 5500);
        return;
      }
      redirect(`acompanhamento/${data?.id}`);
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
        onKeyDown={(e) => e.key == "Enter" && searchCode()}
        ref={codeInp}
        required
        className="w-40 h-10 px-2 border-2 border-neutral-300 rounded-md uppercase"
        placeholder="Código de acesso"
      />

      <button
        onClick={searchCode}
        className="px-3 py-2 bg-tanjerina hover:bg-carot rounded-md cursor-pointer text-white font-medium"
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
      {errorMsg?.isError && (
        <Popup
          className="animate-[popup-animation_5s_ease-in-out_linear] transition-all"
          Icon={LucideSearchX}
          goodNews={false}
          msg={errorMsg.msg}
        />
      )}
    </main>
  );
}
