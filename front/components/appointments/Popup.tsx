import { LucideIcon, X } from "lucide-react";
import { twMerge } from "tailwind-merge";

export default function Popup({
  goodNews,
  Icon,
  msg,
  className,
}: {
  msg: string;
  goodNews: boolean;
  Icon: LucideIcon;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        className,
        "fixed bottom-3 right-3 flex gap-2 items-center justify-between p-2 bg-neutral-100 shadow-xl "
      )}
    >
      <Icon
        data-isGood={goodNews}
        className="data-[isGood=true]:text-green-600 text-red-600"
      />
      <p className="">{msg}</p>
      <X className="cursor-pointer rounded-full hover:bg-black/20 transition-colors" />
    </div>
  );
}
