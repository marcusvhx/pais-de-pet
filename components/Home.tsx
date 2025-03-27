export default function Home({}: {}) {
  return (
    <div className="w-full h-dvw 3xs:h-[90dvh] text-center text-sm xs:text-base 3xs:text-lg bg-cover bg-top bg-[url(../public/png/backgrounds/home-bg.png)] relative">
      <h2 className="font-extrabold sm:text-lg md:text-2xl pt-5 ">
        Produtos indispensáveis para os pais de pet
      </h2>
      <p className="inline md:text-xl">
        aqui tem o <strong className="text-tanjerina font-normal">melhor</strong> para o
        seu <strong className="text-tanjerina font-normal">animalzinho</strong>!
      </p>
      <div className="bg-linear-to-t from-background to-transparent w-full h-40 absolute -bottom-0.5 "></div>
    </div>
  );
}
