import ListInput from "./utils/schedule/ListInput";
import TextInput from "./utils/schedule/TextInput";

export default function Schedule({}: {}) {
  const inputsList = [
    { tittle: "seu nome", placeholder: "matheus" },
    { tittle: "nome do pet", placeholder: "cacau" },
  ];
  const servicesList = ["teste1", "teste2", "teste3"];
  return (
    <section className="bg-linear-135 from-carot via-tanjerina to-yellow w-full h-120 grid justify-center">
      {inputsList.map((inp, idx) => (
        <TextInput tittle={inp.tittle} placeholde={inp.placeholder} key={`input${idx}`} />
      ))}
      <ListInput optionsList={servicesList} />
    </section>
  );
}
