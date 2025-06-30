import GenericWrapper, { iGenericWrapper } from "./GenericWrapper";

export interface iModalWrapper extends iGenericWrapper {
  xAxis?: boolean;
}
export default function ModalWrapper({
  xAxis = false,
  isOpen,
  toggle,
  children,
}: iModalWrapper) {
  return (
    <GenericWrapper
      className="flex items-center justify-center"
      isOpen={isOpen}
      toggle={toggle}
    >
      <div
        data-axis={xAxis}
        className={`duration-400 transition-discrete transition-all w-fit data-[xAxis]:h-fit flex items-center overflow-hidden ${
          isOpen ? "h-dvh data-[xAxis]:w-dvw" : "h-1 data-[xAxis]:w-1"
        }`}
      >
        {children}
      </div>
    </GenericWrapper>
  );
}
