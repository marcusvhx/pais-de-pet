import { cookies } from "next/headers";
import Image from "next/image";
import bgAbout from "@/public/png/backgrounds/about-us-bg.png";

export default async function AboutUs({}: {}) {
  const pageCooies = await cookies();
  const name = pageCooies.get("username")?.value;
  return (
    <section
      id="about-us"
      className="max-sm:px-3 sm:pl-3 2md:pl-20 grid sm:grid-cols-[auto_40dvw] sm:h-hvh sm:mt-10"
    >
      <div className=" text-base/5 md:text-lg/6 w-full sm:place-self-center ">
        <h2 className="text-xl md:text-2xl font-semibold ">
          Olá, {name || "Bem vindo a Pais de Pet"}
        </h2>
        <br />

        <p className="">
          A Pais de Pet é um centro de cuidados completos para animais de
          estimação, criado com um propósito claro: promover saúde, bem-estar e
          qualidade de vida para os pets e tranquilidade aos tutores.
          <br />
          <br />
          Somos fruto da paixão pelos animais e da vontade de oferecer um
          atendimento mais humano, acolhedor e focado na prevenção de doenças,
          indo além do tratamento pontual. Aqui, acreditamos que cuidar bem é
          agir antes que o problema apareça – por isso, nosso serviço
          veterinário tem como base o acompanhamento contínuo, com foco em
          orientação, exames preventivos e diagnósticos precoces.
        </p>
      </div>
      <div className="max-sm:hidden h-[16rem] sm:h-90 md:h-120 lg:h-150 w-full self-center relative">
        <Image
          alt=""
          src={bgAbout}
          fill
          className="object-contain object-right"
        />
      </div>
    </section>
  );
}
