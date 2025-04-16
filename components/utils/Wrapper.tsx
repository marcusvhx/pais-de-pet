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
      className={`transition-discrete transition-colors h-dvh fixed md:hidden top-0 right-0 z-10 overflow-hidden ${
        isOpen ? "w-dvw bg-black/20 " : "bg-transparent w-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
