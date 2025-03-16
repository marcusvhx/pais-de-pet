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
    <section className="px-2">
      <SectoinTittle tittle="Produtos" />
      <div className="flex pt-5 gap-3 overflow-auto scroll-hidden">
        {itemsImagesUrl.map((product, idx) => (
          <ProductSlot key={`url${idx}`}>
            {/* image holder */}
            <div className="relative w-[5.5rem] h-[10rem]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className={`object-cover w-full h-full`}
              />
            </div>
            <p>{product.name}</p>
            <p>
              {product.price.toLocaleString("pt-BR", {
                currency: "BRL",
                style: "currency",
              })}
            </p>
          </ProductSlot>
        ))}
      </div>
    </section>
  );
}
