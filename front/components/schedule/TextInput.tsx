export default function TextInput({
  tittle,
  name,
  placeholder,
  value,
  getValue,
}: {
  tittle: string;
  name: string;
  placeholder: string;
  value: string;
  getValue: (key: string, value: string) => void;
}) {
  return (
    <>
      <p className="first-letter:uppercase text-white md:text-lg">{tittle}</p>
      <input
        defaultValue={value}
        required
        placeholder={placeholder}
        name={name}
        onChange={(e) => getValue(e.target.name, e.target.value)}
        className="max-w-95 w-[90dvw] h-10 placeholder:capitalize rounded-lg bg-white focus:outline-hidden pl-2"
      />
    </>
  );
}
