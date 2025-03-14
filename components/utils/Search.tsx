import { SearchIcon } from "lucide-react";

export default function Search({}: {}) {
  return (
    <div className="flex gap-2 items-center p-1 h-8 w-50 rounded-xl bg-white/60">
      <SearchIcon className="text-white" strokeWidth={3} />
      <input type="text" className="w-full h-full focus:outline-hidden" />
    </div>
  );
}
