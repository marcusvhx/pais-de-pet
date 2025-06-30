import { iListWithId } from "../utils/Carousel";
import { iServiceCard } from "./ServiceCard";
/**
 ** listWithId: lista com um id
 ** key: nome unico
 ** selectedColor: bg-color
 */
export default function PageMarker({
  listWithId,
  keyName,
  selectedColor,
}: {
  listWithId: iListWithId[];
  keyName: string;
  selectedColor: string[];
}) {
  return (
    <div className="flex gap-2">
      {listWithId.map((item, idx) => (
        <div
          key={`pageMarker${keyName}${idx}`}
          className={`${
            item.id == 0
              ? selectedColor[idx] || selectedColor[0]
              : "bg-black/40"
          } w-3 h-3 rounded-full transition-all transition-discrete`}
        ></div>
      ))}
    </div>
  );
}
