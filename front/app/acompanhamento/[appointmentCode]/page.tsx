import Image from "next/image";
import catImage from "@/public/images/appointments/IMG-gato.svg";
import { getAppointment } from "@/api/get";
import { redirect } from "next/navigation";
import emp1 from "@/public/images/employees/employee-image-1.png";
import emp2 from "@/public/images/employees/employee-image-2.png";
import emp3 from "@/public/images/employees/employee-image-3.png";
import CurvedText from "@/components/appointments/CurvedText";
const employeesImages = [emp1, emp2, emp3];
export default async function groomingSteps({
  params,
}: {
  params: Promise<{ appointmentCode: string }>;
}) {
  const code = (await params).appointmentCode;
  const appointment = await getAppointment(code);
  if (appointment.status > 200) {
    redirect("/acompanhamento");
  }

  return (
    <main className="w-full h-dvh p-4 flex flex-col items-center justify-between bg-linear-180 from-cerulean to-30% to-white ">
      <div className="">
        <Image src={catImage} alt="gato" className="w-full h-[25dvh] " />
        <p className="text-sm text-center">
          estamos preparando seu pet para você! Acompanhe o processo por aqui,
          te avisaremos pelo whatsapp quanto acabar
        </p>
      </div>
      <div className="self-start">
        <h2 className="text-lg font-medium">Etapas</h2>
        <div className="bg-linear-90 from-tanjerina via-yellow to-white to-30% h-1 w-30 rounded-full"></div>
      </div>

      <div className=" w-[90dvw] h-1/3 overflow-scroll flex flex-col items-start p-4 gap-4">
        {appointment.data &&
          appointment.data.path.steps.map((step, idx) => (
            // container das etapas
            <div
              data-first={idx == 0}
              key={`step${idx}`}
              className={`data-[first=false]:mt-[26px] flex justify-around items-center gap-x-2`}
            >
              {/* container do caminho */}
              <div className="w-6 flex justify-center">
                {/* bola */}
                <div
                  data-first={idx == 0}
                  data-done={
                    (appointment.data?.path.currentPosition ?? -1) >= idx
                  }
                  data-current={
                    (appointment.data?.path.currentPosition ?? -1) == idx
                  }
                  className="relative data-[first=true]:z-1 size-2 data-[current=true]:size-3 data-[done=true]:bg-tanjerina bg-[#fed699] rounded-full"
                >
                  {/* linha */}
                  {idx > 0 && (
                    <div
                      data-done={
                        (appointment.data?.path.currentPosition ?? -1) >= idx
                      }
                      className={`absolute bottom-[95%] left-1/2 -translate-x-1/2 h-15 w-1 data-[done=true]:bg-tanjerina bg-[#fed699] `}
                    />
                  )}
                </div>
              </div>
              {/* texto */}
              <p>{step}</p>
              {/* imagem do funcionário */}
            </div>
          ))}
      </div>
      <div className="relative">
        <div className="overflow-hidden size-35 bg-tanjerina rounded-full">
          <Image
            className="w-full "
            src={employeesImages[appointment.data?.employee.id - 1 || 0]}
            alt={`funcionário`}
          />
        </div>
        <CurvedText text="responsável" />
      </div>
    </main>
  );
}
