import Image, { StaticImageData } from "next/image";

export interface iServiceCard {
  image: StaticImageData;
  tittle: string;
  description: string;
  color: string;
}

export default function ServiceCard({
  image,
  color,
  description,
  tittle,
}: iServiceCard) {
  const gradientColor = `from-${color}`;
  return (
    <div className="relative min-w-[17rem] min-h-[10rem] rounded-lg overflow-hidden">
      <div className="absolute w-full h-fit bottom-0 left-0 flex flex-col gap-1 z-10 text-white p-1.5">
        <h2 className="text-lg font-bold uppercase relative text-orange">
          <p className="text-lg font-bold uppercase text-white absolute top-2 ">
            {tittle}
          </p>
          {tittle}
        </h2>
        <p className="normal-case text-sm">{description}</p>
      </div>

      <Image src={image} alt="" fill className="object-cover" />

      <div
        className={`absolute bottom-0 left-0 w-full h-2/3 bg-linear-to-t ${gradientColor} to-transparent`}
      />
    </div>
  );
}
