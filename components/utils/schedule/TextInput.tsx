export default function TextInput({
  tittle,
  placeholde,
}: {
  tittle: string;
  placeholde: string;
}) {
  return (
    <div className="">
      <p className="text-white text-lg">{tittle}</p>
      <input
        placeholder={placeholde}
        className="w-80 h-10 placeholder:capitalize rounded-lg bg-white focus:outline-hidden pl-2"
      />
    </div>
  );
}
