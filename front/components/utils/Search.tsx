import { SearchIcon } from "lucide-react";

export default function Search({}: {}) {
  return (
    <div className="flex gap-2 items-center p-1 pl-3 h-10 w-full rounded-full bg-white/50 2sm:max-w-150 ">
      <SearchIcon className="text-white" strokeWidth={3} />
      <input type="text" className="w-full h-full focus:outline-hidden" />
    </div>
  );
}
