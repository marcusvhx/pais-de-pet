import { Star } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

export interface iFeedbackData {
  id: number;
  userPic: StaticImageData | string;
  userName: string;
  rate: number;
  comment: string;
  className?: string;
}

export default function FeedbackCard({
  userName,
  userPic,
  rate,
  comment,
  className,
}: iFeedbackData) {
  const starsValues = () => {
    const starsValues: boolean[] = [];

    for (let starIdx = 1; starIdx <= 5; starIdx++) {
      starsValues.push(starIdx <= rate);
    }

    return starsValues;
  };
  return (
    <div
      className={twMerge(
        "w-[85dvw] p-4 rounded-xl bg-sky-250 flex flex-col items-center",
        className
      )}
    >
      <div
        className={`w-15 h-15 bg-white relative rounded-full overflow-hidden`}
      >
        <Image
          src={userPic}
          alt={`${userName}`}
          fill
          className="object-cover object-top"
        />
      </div>
      <h2 className="capitalize font-semibold mt-1">{userName}</h2>
      <div className="flex">
        {starsValues().map((el, idx) => (
          <Star
            key={`starholder${idx}`}
            data-active={el}
            className="stroke-0 data-[active=true]:fill-yellow fill-gray-400"
          />
        ))}
      </div>
      <div className="bg-white text-lg leading-5 p-3 text-center rounded-lg mt-3">
        {comment}
      </div>
    </div>
  );
}
