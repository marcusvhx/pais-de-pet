import { cookies } from "next/headers";
import PopUpAskName from "./utils/PopUpAskName";
import Link from "next/link";

export default async function Home({}: {}) {
  const pageCooies = await cookies();

  return (
    <section
      id="home"
      className="relative w-full h-dvw 3xs:h-[90dvh] text-center text-sm xs:text-base 3xs:text-lg bg-cover bg-top bg-[url(/png/backgrounds/home-bg.png)]"
    >
      <h2 className="font-extrabold px-5 sm:text-lg md:text-2xl pt-5 first-letter:uppercase">
        sempre prontos para todas as necessidades do seu pet
      </h2>
      <p className="inline md:text-xl">
        Aqui tem o{" "}
        <strong className="text-tanjerina font-normal">melhor</strong> para o
        seu <strong className="text-tanjerina font-normal">animalzinho</strong>!
      </p>
      <div className="absolute bottom-15 left-1/2 -translate-x-1/2 z-2 flex flex-wrap gap-2 text-nowrap capitalize text-base md:text-lg ">
        <a
          className="px-3 py-2 rounded-full bg-tanjerina hover:bg-carot text-white transition-colors"
          href="#schedule"
        >
          fazer agendamento
        </a>
        <Link
          href="acompanhamento"
          className="px-3 py-2 rounded-full bg-tanjerina hover:bg-carot text-white transition-colors"
        >
          Acompanhar seu pet
        </Link>
      </div>
      <div className="bg-linear-to-t from-background to-transparent w-full h-40 absolute -bottom-0.5 "></div>
      {!pageCooies.get("username") && <PopUpAskName />}
    </section>
  );
}
