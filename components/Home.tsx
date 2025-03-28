export default function Home({}: {}) {
  return (
    <section
      id="home"
      className="w-full h-dvw 3xs:h-[90dvh] text-center text-sm xs:text-base 3xs:text-lg bg-cover bg-top bg-[url(/png/backgrounds/home-bg.png)] relative"
    >
      <h2 className="font-extrabold sm:text-lg md:text-2xl pt-5 capitalize">
        Produtos indispensáveis para os pais de pet
      </h2>
      <p className="inline md:text-xl">
        Aqui tem o <strong className="text-tanjerina font-normal">melhor</strong> para o
        seu <strong className="text-tanjerina font-normal">animalzinho</strong>!
      </p>
      <a
        href="#schedule"
        className="absolute bottom-1/5 left-1/2 -translate-1/2 z-2 text-nowrap capitalize text-lg md:text-xl px-3 py-2 rounded-full bg-tanjerina hover:bg-carot text-white transition-colors"
      >
        fazer agendamento
      </a>
      <div className="bg-linear-to-t from-background to-transparent w-full h-40 absolute -bottom-0.5 "></div>
    </section>
  );
}
