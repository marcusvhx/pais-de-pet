export default function Home({}: {}) {
  return (
    <div className="w-full h-dvw text-center bg-cover bg-[url(../public/png/backgrounds/home-bg.png)] relative">
      <h2 className="font-extrabold pt-5">
        Produtos indispensáveis para os pais de pet
      </h2>
      <p className="font-normal">
        aqui tem o <b className="font-normal text-orange">melhor</b> para o seu{" "}
        <b className="font-normal text-orange">animalzinho</b>!
      </p>
      <div className="bg-linear-to-t from-background to-transparent w-full h-40 absolute -bottom-0.5"></div>
    </div>
  );
}
