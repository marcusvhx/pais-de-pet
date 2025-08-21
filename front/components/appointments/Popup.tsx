import { LucideIcon, X } from "lucide-react";
import { twMerge } from "tailwind-merge";

export default function Popup({
  goodNews,
  Icon,
  msg,
  className,
  isVisible,
}: {
  msg: string;
  goodNews: boolean;
  Icon: LucideIcon;
  isVisible: boolean;
  className?: string;
}) {
  return (
    <div
      data-visible={isVisible}
      className={twMerge(
        className,
        "data-[visible=true]:opacity-100 opacity-0 fixed bottom-3 right-3 flex transition-all gap-2 items-center justify-between p-2 bg-neutral-100 shadow-xl "
      )}
    >
      <Icon
        data-good={goodNews}
        className="data-[good=true]:text-green-600 text-red-600"
      />
      <p className="">{msg}</p>
      {/* <X className="cursor-pointer rounded-full hover:bg-black/20 transition-colors" /> */}
    </div>
  );
}
