import { ReactNode } from "react";

export default function Wrapper({
  isOpen,
  toggle,
  className,
  children,
}: {
  isOpen: boolean;
  toggle: () => void;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      onClick={toggle}
      className={`transition-discrete transition-all bg-black/20 fixed h-dvh w-dvw md:hidden top-1/2 left-1/2 -translate-1/2 z-10 overflow-hidden ${
        !isOpen && "invisible"
      } ${className}`}
    >
      {children}
    </div>
  );
}
