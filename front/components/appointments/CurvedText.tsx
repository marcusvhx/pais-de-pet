export default function CurvedText({ text }: { text: string }) {
  const splitedText = text.split("");
  const deg = ~~(splitedText.length / 2) * -1;
  return (
    <span className="absolute -rotate-30 top-1/2 left-1/2 -translate-1/2">
      <div className="w-2 h-2 flex relative origin-center">
        {splitedText.map((letter, idx) => {
          console.log(deg * -1 + idx);
          return (
            <div
              style={{ transform: `rotate(${(deg + idx) * 10}deg)` }}
              key={`letter${idx}`}
              className={
                "w-3 h-24 font-semibold text-[15pt] absolute bottom-0 left-1/2 -translate-x-1/2 origin-bottom"
              }
            >
              {letter}
            </div>
          );
        })}
      </div>
    </span>
  );
}
