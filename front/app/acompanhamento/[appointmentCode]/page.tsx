import Image from "next/image";
import catImage from "@/public/images/appointments/IMG-gato.svg";
export default function groomingSteps({}: {}) {
  return (
    <main className="w-full h-dvh p-4 flex flex-col items-center gap-4 bg-linear-180 from-cerulean to-30% to-white ">
      <Image src={catImage} alt="gato" className="w-full h-[20dvh] " />
    </main>
  );
}
