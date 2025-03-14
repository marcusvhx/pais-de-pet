import { ReactNode } from "react";

export default function ProductSlot({ children }: { children: ReactNode }) {
  return (
    // border gradiant
    <div className="w-fit h-fti p-1.5 flex bg-linear-to-t from-orange via-yellow via-20% to-transparent to-40% rounded-b-2xl">
      {/* content container */}
      <div className="w-[8.4rem] h-fit p-1 grid place-items-center text-center bg-background rounded-lg">
        {children}
      </div>
    </div>
  );
}
