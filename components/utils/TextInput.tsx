export default function TextInput({
  tittle,
  name,
  placeholde,
  getValue,
}: {
  tittle: string;
  name: string;

  placeholde: string;
  getValue: (key: string, value: string) => void;
}) {
  return (
    <>
      <p className="text-white text-lg">{tittle}</p>
      <input
        placeholder={placeholde}
        name={name}
        onChange={(e) => getValue(e.target.name, e.target.value)}
        className="max-w-(--input-max-w) w-[90dvw] h-10 placeholder:capitalize rounded-lg bg-white focus:outline-hidden pl-2"
      />
    </>
  );
}
