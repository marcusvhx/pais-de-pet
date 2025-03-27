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
      className="flex flex-col w-full h-fit bg-linear-to-b from-background via-cerulean/60 to-background"
    >
      <h2 className="font-lg uppercase font-bold text-center mb-5">
        conheça nossos funcionários
      </h2>

      <div className="flex gap-2 justify-around flex-wrap w-full">
        {employeesList.map((emp, idx) => (
          <div className="flex flex-col items-center z-1" key={`eployee${idx}`}>
            <div className="h-50 w-32 relative">
              <Image
                src={emp.image}
                alt={emp.name}
                fill
                className="object-cover rounded-b-md"
              />
            </div>
            <h2 className="font-bold mt-1">{emp.name}</h2>
            <p className="-mt-1">{emp.profession}</p>
          </div>
        ))}
      </div>
      <div className="h-50 -mt-10 relative">
        <Image src={paws} alt="" fill className="object-cover" />
      </div>
    </section>
  );
}
