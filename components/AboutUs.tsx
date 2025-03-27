import Image from "next/image";
import aboutBg from "@/public/png/backgrounds/about-us-bg.png";

export default function AboutUs({}: {}) {
  return (
    <section id="about-us" className="flex justify-between relative">
      <div className=" text-sm/4 2xs:text-base/4 w-[60dvw] ml-2">
        <h2 className="text-xl font-bold uppercase my-2">sobre nós</h2>

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
      <div className="h-[16rem] w-[40dvw] relative 3xs:w-[187px] right-0">
        <Image alt="" src={aboutBg} fill className="object-contain " />
      </div>
    </section>
  );
}
