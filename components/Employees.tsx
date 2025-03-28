import employee1 from "@/public/png/employees/employee-image-1.png";
import employee2 from "@/public/png/employees/employee-image-2.png";
import employee3 from "@/public/png/employees/employee-image-3.png";
import paws from "@/public/png/backgrounds/paws-bg.png";
import Image from "next/image";

export default function Employees({}: {}) {
  const employeesList = [
    { image: employee1, name: "nathalia", profession: "banhista de pet" },
    { image: employee2, name: "michele", profession: "banhista de pet" },
    { image: employee3, name: "Dr. Rafael", profession: "veterinário" },
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
          <div className=" flex flex-col items-center z-1" key={`eployee${idx}`}>
            <div className="h-50 w-31 3xs:h-66 3xs:w-40 md:h-72 md:w-44 2md:h-90 2md:w-55 relative  ">
              <Image
                src={emp.image}
                alt={emp.name}
                fill
                className="object-contain object-top rounded-b-md"
              />
            </div>
            <div className="w-fit h-fit sm: bg-white/40 p-1 rounded-3xl sm:text-lg/5 capitalize text-center">
              <h2 className="font-bold">{emp.name}</h2>
              <p className="">{emp.profession}</p>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`h-50 w-full absolute -bottom-40 2xs:-bottom-45 bg-cover min-[490px]:bg-contain sm:h-54 sm:-bottom-54 bg-top bg-repeat bg-[url(/png/backgrounds/paws-bg.png)]`}
      ></div>
    </section>
  );
}
