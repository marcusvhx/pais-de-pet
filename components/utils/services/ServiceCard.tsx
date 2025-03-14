import Image, { StaticImageData } from "next/image";

export default function ServiceCard({ image }: { image: StaticImageData }) {
  return (
    <div className="relative w-28 h-10">
      <Image
        src={image}
        alt=""
        layout="fill"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-linear-to-t from-orange to-transparent" />
    </div>
  );
}
