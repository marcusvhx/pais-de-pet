export default function SectoinTittle({ tittle }: { tittle: string }) {
  return (
    <div className="w-fit ml-2 sm:mb-6">
      <p className="font-bold text-xl 3xs:text-2xl pl-1 pr-8 capitalize">{tittle}</p>
      <div className="w-full h-1 bg-linear-to-r from-tanjerina from-40% via-yellow via-70% to-transparent rounded-full" />
    </div>
  );
}
