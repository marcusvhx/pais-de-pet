export default function SectoinTittle({ tittle }: { tittle: string }) {
  return (
    <div className="w-fit ml-2">
      <p className="font-bold text-xl pl-1 pr-8 uppercase">{tittle}</p>
      <div className="w-full h-1 bg-linear-to-r from-tanjerina from-40% via-yellow via-70% to-transparent rounded-full" />
    </div>
  );
}
