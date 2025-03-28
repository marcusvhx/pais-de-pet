import Image from "next/image";
import aboutBg from "@/public/png/backgrounds/about-us-bg.png";

export default function AboutUs({}: {}) {
  return (
    <section id="about-us" className="grid grid-cols-[auto_40dvw] sm:h-hvh sm:mt-10">
      <div className=" text-sm/5 2xs:text-base/5 md:text-lg/6 w-full sm:w-6/7 ml-2 2md:pl-20 sm:place-self-center ">
        <h2 className="text-xl md:text-2xl font-bold uppercase my-2">sobre nós</h2>

        <p className="normal-case">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia sequi quia
          voluptates, quod ab ut vitae dolorum, quisquam fugiat eveniet veritatis pariatur
          nisi accusantium est perspiciatis eaque. Nulla, provident assumenda?
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, quasi sequi
          quibusdam sed voluptatum rerum laudantium dolores sint vel.
        </p>
      </div>
      <div className="h-[16rem] sm:h-full w-full sm:w-full self-center relative">
        <Image alt="" src={aboutBg} fill className="object-contain object-right" />
      </div>
    </section>
  );
}
