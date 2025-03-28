import { X } from "lucide-react";
import { iBookmark } from "./Header";

export default function SideBar({
  isOpen,
  toggle,
  bookmarks,
}: {
  isOpen: boolean;
  toggle: (filter: string, name: string) => void;
  bookmarks: iBookmark[];
}) {
  return (
    <div
      onClick={(e) => toggle("side-bar-toggle", e.currentTarget.className)}
      className={`side-bar-toggle h-dvh fixed md:hidden top-0 right-0 overflow-hidden flex justify-end transition-colors ${
        isOpen ? "w-dvw bg-black/20 " : "delay-500 w-0"
      }`}
    >
      <div
        className={`${
          isOpen ? "w-60" : "w-0"
        } h-full p-2 text-lg font-semibold uppercase flex flex-col overflow-hidden transition-all bg-background rounded-l-lg`}
      >
        <div className="flex justify-end h-10 w-full">
          <X className="w-10 h-full" />
        </div>
        {bookmarks.map(({ anchor, name }) => (
          <HeaderLink key={name} anchor={anchor} name={name} />
        ))}
      </div>
    </div>
  );
}

function HeaderLink({ anchor, name }: { name: string; anchor: string }) {
  return (
    <a
      className="w-full py-2 border-b border-zinc-400 text-center hover:bg-neutral-200"
      href={`#${anchor}`}
    >
      {name}
    </a>
  );
}
