import employee1 from "@/public/png/employees/employee-image-1.png";
import employee2 from "@/public/png/employees/employee-image-2.png";
import employee3 from "@/public/png/employees/employee-image-3.png";
import EmployeeSlot, { iEmployeeData } from "./EmployeeSlot";

export default function Employees({}: {}) {
  const employeesList: iEmployeeData[] = [
    {
      picture: employee1,
      name: "Nathalia",
      profession: "banhista de pet",
      bgColor: "bg-terracota",
      description:
        "Sou banhista na País de Pet e cuido de cada animal com carinho, paciência e atenção aos detalhes. Para mim, o banho não é só sobre limpeza — é um momento de cuidado, saúde e bem-estar. Faço questão de que cada pet se sinta seguro, confortável e bem tratado do início ao fim.",
    },
    {
      picture: employee2,
      name: "Michele",
      profession: "banhista de pet",
      bgColor: "bg-tanjerina/70",
      description:
        "Sou banhista na País de Pet e cuido de cada animal com carinho, paciência e atenção aos detalhes. Para mim, o banho não é só sobre limpeza — é um momento de cuidado, saúde e bem-estar. Faço questão de que cada pet se sinta seguro, confortável e bem tratado do início ao fim.",
    },
    {
      picture: employee3,
      name: "Dr. Rafael",
      profession: "veterinário",
      bgColor: "bg-cerulean/70",
      description:
        "Sou médico veterinário na País de Pet e meu foco é oferecer um atendimento próximo, preventivo e de confiança. Acredito que cuidar vai além de tratar — é acompanhar de verdade a saúde e o bem-estar dos pets em cada fase da vida. Estou aqui para orientar, acolher e garantir que seu pet tenha uma vida longa e saudável.",
    },
  ];
  return (
    <section
      id="employees"
      className="relative pt-8 mb-28 3xs:mb-34 3xs:pt-3 flex flex-col w-full h-fit bg-linear-to-b from-background via-cerulean/60 to-background"
    >
      <h2 className="text-lg sm:text-xl uppercase font-bold text-center mb-5">
        conheça nossos funcionários
      </h2>

      <div className="flex gap-2 justify-around 2sm:justify-center 2sm:gap-12 flex-wrap w-full">
        {employeesList.map((emp, idx) => (
          <EmployeeSlot {...emp} key={`eployee${idx}`} />
        ))}
      </div>
      <div
        className={`h-50 w-full absolute -bottom-40 2xs:-bottom-45 bg-cover min-[490px]:bg-contain sm:h-54 sm:-bottom-54 bg-top bg-repeat bg-[url(/png/backgrounds/paws-bg.png)]`}
      ></div>
    </section>
  );
}
