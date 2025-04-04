import { iServiceCard } from "./ServiceCard";

export default function PageMarker({ cardsList }: { cardsList: iServiceCard[] }) {
  return (
    <div className="flex gap-2">
      {cardsList.map((card) => (
        <div
          key={`page${card.tittle}`}
          className={`${
            card.id == 0 ? "bg-tanjerina" : "bg-black/40"
          } w-3 h-3 rounded-full transition-all transition-discrete`}
        ></div>
      ))}
    </div>
  );
}
