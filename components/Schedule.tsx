"use client";
import { useState } from "react";
import PetKindToggle from "./utils/schedule/PetKindToggle";
import TextInput from "./utils/TextInput";
import ListInput from "./utils/ListInput";

// lista de funcionarios e serviços
const servicesEmployeesList = [
  { service: "banho e tosa", employees: ["michele", "nathalia"] },
  { service: "consulta vetérinária", employees: ["dr. rafael"] },
  { service: "reservar produto do petshop", employees: ["nathalia"] },
];

const servicesList = servicesEmployeesList.map((obj) => obj.service); // lista de serviços

export default function Schedule({}: {}) {
  const [employeesList, setEmployeesList] = useState(servicesEmployeesList[0].employees); // atendente selecionado
  // dados do formulario
  const [scheduleData, setScheduleData] = useState({
    clientName: "",
    petName: "",
    selectedService: servicesList[0],
    selectedEmployee: employeesList[0],
  });

  // coletor de dados do formulario
  const getData = (key: string, value: string) => {
    setScheduleData((old) => ({ ...old, [key]: value }));

    if (key === "selectedService") {
      setQualifiedEmployee(value);
    }
  };

  // filtra os funcionaros pelo serviço que prestam, um veterinário nao da banho
  const setQualifiedEmployee = (service: string) => {
    const serviceIndex = servicesList.indexOf(service); // acha o index do service, que vai estar com os funcionarios que o fazem
    const employees = servicesEmployeesList[serviceIndex].employees; // lista de responsaveis pelo serviço escolhido
    setEmployeesList(() => employees); // altera a lista de atendentes
    getData("selectedEmployee", employees[0]); // altera o valor do input para o primeiro funcionario da lista de atendentes
  };

  const inputsDataList = [
    { tittle: "seu nome", placeholder: "ex.: matheus silva", name: "clientName" },
    { tittle: "nome do pet", placeholder: "ex.: cacau", name: "petName" },
  ];
  const inputListData = [
    {
      tittle: "serviços",
      name: "selectedService",
      optionsList: servicesList,
      selectedOption: scheduleData.selectedService,
      getSeletedOption: getData,
    },
    {
      tittle: "atendentes",
      name: "selectedEmployee",
      optionsList: servicesList,
      selectedOption: scheduleData.selectedEmployee,
      getSeletedOption: getData,
    },
  ];

  return (
    <section
      id="schedule"
      className="bg-linear-135 from-carot via-tanjerina to-yellow w-full h-fit p-2 flex flex-col items-center gap-4"
    >
      <p className="text-xl font-bold text-white mt-2">hora do agendamento</p>
      {inputsDataList.map((inp, idx) => (
        <div className="col-span-2 w-fit" key={`input${idx}`}>
          <TextInput
            tittle={inp.tittle}
            placeholde={inp.placeholder}
            getValue={getData}
            name={inp.name}
          />
        </div>
      ))}
      {inputListData.map((data, idx) => (
        <div key={`selectInput${idx}`}>
          <p className="text-white text-lg">{data.tittle}</p>
          <ListInput
            name={data.name}
            optionsList={data.optionsList}
            selectedOption={data.selectedOption}
            getSelectedOption={data.getSeletedOption}
          />
        </div>
      ))}

      <PetKindToggle />

      <button
        type="submit"
        className="w-fit px-3 py-1 flex justify-between items-center gap-2 bg-carot rounded-full  text-white xl:text-base 2xs:text-lg"
      >
        Continuar atendimento pelo whatsapp
        <svg
          className="hidden xs:inline"
          width="30px"
          height="30px"
          viewBox="0 0 18 15"
          fill="currentColor"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      </button>
    </section>
  );
}
