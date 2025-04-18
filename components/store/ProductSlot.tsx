import { ReactNode } from "react";

export default function ProductSlot({ children }: { children: ReactNode }) {
  return (
    // border gradiant
    <div className="w-fit h-fit p-1.5 flex bg-linear-to-t from-tanjerina via-yellow via-20% 3xs:via-20% to-transparent to-40% 3xs:to-50% rounded-b-2xl">
      {/* content container */}
      <div className="w-28 h-max sm:w-32 flex flex-col gap-2 justify-between items-center text-center text-sm/4 sm:text-base/4 bg-background rounded-lg ">
        {children}
      </div>
    </div>
  );
}
