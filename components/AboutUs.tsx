import Image from "next/image";
import aboutBg from "@/public/png/backgrounds/about-us-bg.png";

export default function AboutUs({}: {}) {
  return (
    <section className="flex flex-col gap-1 pl-2 relative">
      <h2 className="text-xl font-bold uppercase">sobre nós</h2>

      <div className=" text-sm/4 w-[60dvw]">
        <p className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia sequi quia
          voluptates, quod ab ut vitae dolorum, quisquam fugiat eveniet veritatis pariatur
          nisi accusantium est perspiciatis eaque. Nulla, provident assumenda?
        </p>
        <p className="mt-1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, quasi sequi
          quibusdam sed voluptatum rerum laudantium dolores sint vel, minima porro
          doloribus nesciunt sit alias iusto. Incidunt laudantium fuga error?
        </p>
      </div>
      <div className="h-[16rem] w-[45dvw] absolute right-0 top-[10%] ">
        <Image alt="" src={aboutBg} fill className="object-contain" />
      </div>
    </section>
  );
}
