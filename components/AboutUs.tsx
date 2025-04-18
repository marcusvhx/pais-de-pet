import { cookies } from "next/headers";

export default async function AboutUs({}: {}) {
  const pageCooies = await cookies();
  const name = pageCooies.get("username")?.value;
  return (
    <section id="about-us" className="grid lg:grid-cols-[auto_40dvw] sm:h-hvh sm:mt-10">
      <div className=" text-base/5 md:text-lg/6 w-full pl-2 2md:pl-20 sm:place-self-center ">
        <h2 className="text-xl md:text-2xl font-semibold ">
          Olá, {name || "Bem vindo a Pais de Pet"}
        </h2>
        <br />

        <p className="">
          A Pais de Pet é um centro de cuidados completos para animais de estimação,
          criado com um propósito claro: promover saúde, bem-estar e qualidade de vida
          para os pets e tranquilidade aos tutores.
          <br />
          <br />
          Somos fruto da paixão pelos animais e da vontade de oferecer um atendimento mais
          humano, acolhedor e focado na prevenção de doenças, indo além do tratamento
          pontual. Aqui, acreditamos que cuidar bem é agir antes que o problema apareça –
          por isso, nosso serviço veterinário tem como base o acompanhamento contínuo, com
          foco em orientação, exames preventivos e diagnósticos precoces.
        </p>
      </div>
      {/* <div className="h-[16rem] sm:h-full w-full sm:w-full self-center relative">
        <Image alt="" src={aboutBg} fill className="object-contain object-right" />
      </div> */}
    </section>
  );
}
