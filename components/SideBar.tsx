export default function SideBar({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: (filter: string, name: string) => void;
}) {
  return (
    <div
      onClick={(e) => toggle("toggle", e.currentTarget.className)}
      className={` toggle top-0 h-dvh w-dvw flex justify-end transition-all ${
        isOpen ? "fixed bg-black/20" : " hidden bg-transparent"
      }`}
    >
      <div
        className={`${
          isOpen ? "w-60" : "w-0"
        } h-full flex flex-col overflow-hidden transition-all bg-background`}
      ></div>
    </div>
  );
}
