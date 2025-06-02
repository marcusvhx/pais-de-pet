import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
export interface iGenericWrapper {
  isOpen: boolean;
  toggle: () => void;
  className?: string;
  children?: ReactNode;
}

export default function GenericWrapper({
  isOpen,
  toggle,
  className,
  children,
}: iGenericWrapper) {
  return (
    <div
      onClick={toggle}
      className={twMerge(
        `transition-discrete transition-all bg-black/20 fixed h-dvh w-dvw top-1/2 left-1/2 -translate-1/2 z-10 overflow-hidden ${
          !isOpen && "invisible"
        }`,
        className
      )}
    >
      {children}
    </div>
  );
}
