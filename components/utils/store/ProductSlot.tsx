import { ReactNode } from "react";

export default function ProductSlot({ children }: { children: ReactNode }) {
  return (
    // border gradiant
    <div className="w-fit h-fit p-1.5 flex bg-linear-to-t from-tanjerina via-yellow via-20% 3xs:via-20% to-transparent to-40% 3xs:to-50% rounded-b-2xl">
      {/* content container */}
      <div className="w-28 h-50 3xs:h-52 sm:w-36 2sm:h-58 flex flex-col justify-between items-center text-center text-sm/4 3xs:text-base/4 sm:text-lg/5 bg-background rounded-lg ">
        {children}
      </div>
    </div>
  );
}
