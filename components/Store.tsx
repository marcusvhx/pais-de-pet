import Image, { StaticImageData } from "next/image";
import SectoinTittle from "./utils/SectionTittle";
import product1 from "@/public/png/products/product-1.png";
import product2 from "@/public/png/products/product-2.png";
import product3 from "@/public/png/products/product-3.png";
import ProductSlot from "./utils/store/ProductSlot";

interface iProduct {
  image: StaticImageData;
  name: string;
  price: number;
}

export default function Store({}: {}) {
  const itemsImagesUrl: iProduct[] = [
    { image: product1, name: "ração gran plus cão adulto", price: 120 },
    { image: product2, name: "ração gran plus gato adulto", price: 125 },
    { image: product3, name: "ração goldeN cão adulto", price: 130 },
    // -------
    { image: product1, name: "ração gran plus cão adulto", price: 120 },
    { image: product2, name: "ração gran plus gato adulto", price: 125 },
    { image: product3, name: "ração goldeN cão adulto", price: 130 },
  ];
  return (
    <section id="store" className=" w-full h-fit">
      <SectoinTittle title="Produtos" />
      <div className="w-full flex justify-center">
        <div className="capitalize flex pt-5 px-2 gap-3 overflow-x-scroll scroll-hidden">
          {itemsImagesUrl.map((product, idx) => (
            <ProductSlot key={`url${idx}`}>
              {/* image holder */}
              <div className="relative w-20 h-32 ">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={`object-contain w-full h-full`}
                />
              </div>

              <div className="w-full h-15 pb-1 flex flex-col justify-between">
                <p className="">{product.name}</p>
                <p className="justify-self-end">
                  {product.price.toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                  })}
                </p>
              </div>
            </ProductSlot>
          ))}
        </div>
      </div>
    </section>
  );
}
