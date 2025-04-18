import { ChevronLeft } from "lucide-react";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";
/**
 * essa interface representa um objeto que PRECISA ter um id, e pode ter
 * quais quer outras itens
 */
export interface iListWithId {
  id: number;
  [key: string]: any;
}

/**
 * essa interface representa um objeto com uma lista generica baseada na
 * listWithId e um setState desse mesmo objeto
 */
export interface iCarousel<T extends iListWithId> {
  listWithId: T[]; // lista generica de objetos com id
  setList: Dispatch<SetStateAction<T[]>>; // set lista generica de objetos com id
  children: ReactNode;
  className?: string;
}

/**
 * para usar esse componente será preciso
 ** especificar o objeto generico,
 ** importar a dependencia *positionHandler* e chama-la no className do item do
 carrossel -- ex.: className={"... ${positionHandler(id, ultimoIndex)}"}
 * 
 */
export default function Carousel<T extends iListWithId>({
  listWithId,
  setList,
  children,
  className,
}: iCarousel<T>) {
  const lastIndex = listWithId.length - 1;
  const next = () => {
    const tempHolder = listWithId.map((card) => {
      const newId = card.id == 0 ? lastIndex : card.id - 1;
      return { ...card, id: newId };
    });

    setList(() => tempHolder);
  };

  const prev = () => {
    const tempHolder = listWithId.map((card) => {
      const newId = card.id == lastIndex ? 0 : card.id + 1;
      return { ...card, id: newId };
    });

    setList(() => tempHolder);
  };

  return (
    <div className={twMerge("flex w-full relative", className)}>
      {children}
      <ChevronLeft
        onClick={prev}
        className="h-10 w-10 pr-1 bg-black/30 text-white rounded-full absolute top-1/2 -translate-y-1/2 left-0 z-4"
      />
      <ChevronLeft
        onClick={next}
        className="h-10 w-10 pr-1 bg-black/30 text-white rounded-full absolute top-1/2 -translate-y-1/2 right-0 z-4 rotate-180"
      />
    </div>
  );
}

/**
 *
 * @param reference
 * o id do item
 * @param lastIndex
 * o ultimo index da lista de itens do carrossel
 * @returns
 */
export const positionHandler = (reference: number, lastIndex: number) => {
  switch (reference) {
    case 0:
      return "drop-shadow-xl/50 left-1/2 -translate-x-1/2 z-3";
    case 1:
      return "blur-xs opacity-60 z-2 left-[calc(50%+(220px-50px))] -translate-x-1/2";
    case lastIndex:
      return "blur-xs opacity-60 z-2 left-[calc(50%-(220px-50px))] -translate-x-1/2";
    default:
      return "blur-xs opacity-40 z-1 left-1/2 -translate-x-1/2";
  }
};
