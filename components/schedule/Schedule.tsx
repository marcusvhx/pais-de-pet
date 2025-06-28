"use client";
import { useState } from "react";
import PetKindToggle from "./PetKindToggle";
import TextInput from "./TextInput";
import ListInput from "./ListInput";
import Image from "next/image";
import formBg from "@/public/svg/form-bg.svg";
import WhatsappIcon from "@/public/svg/whatsapp";
// lista de funcionarios e serviços

export interface iScheduleData {
  clientName: string;
  petName: string;
  selectedService: string;
  selectedEmployee: string;
  petKind: string;
}

const servicesEmployeesList = [
  { service: "banho e tosa", employees: ["Michele", "Nathalia"] },
  { service: "consulta vetérinária", employees: ["dr. Rafael"] },
  { service: "vacinação", employees: ["dr. Rafael"] },
];

const servicesList = servicesEmployeesList.map((obj) => obj.service); // lista de serviços

export default function Schedule({}: {}) {
  const [employeesList, setEmployeesList] = useState(
    servicesEmployeesList[0].employees
  ); // atendente selecionado
  // dados do formulario
  const [scheduleData, setScheduleData] = useState({
    clientName: "",
    petName: "",
    selectedService: servicesList[0],
    selectedEmployee: employeesList[0],
    petKind: "",
  });

  // coletor de dados do formulario
  const getData = (key: string, value: string) => {
    setScheduleData((old) => ({ ...old, [key]: value }));

    if (key === "selectedService") {
      setQualifiedEmployee(value);
    }
  };

  const formatData = (obj: Object, filter: string, replaceTo: string) => {
    const keys = Object.keys(obj);
    keys.forEach((key) => {
      //@ts-ignore
      const formatedValue = obj[key].replaceAll(filter, replaceTo);
      setScheduleData((old) => ({ ...old, [key]: formatedValue }));
    });
  };

  // filtra os funcionaros pelo serviço que prestam, um veterinário nao da banho
  const setQualifiedEmployee = (service: string) => {
    const serviceIndex = servicesList.indexOf(service); // acha o index do service, que vai estar com os funcionarios que o fazem
    const employees = servicesEmployeesList[serviceIndex].employees; // lista de responsaveis pelo serviço escolhido
    setEmployeesList(() => employees); // altera a lista de atendentes
    getData("selectedEmployee", employees[0]); // altera o valor do input para o primeiro funcionario da lista de atendentes
  };

  const inputsDataList = [
    {
      tittle: "seu nome",
      placeholder: "ex.: matheus silva",
      name: "clientName",
    },
    { tittle: "nome do pet", placeholder: "ex.: cacau", name: "petName" },
  ];
  const inputListData = [
    {
      tittle: "serviço",
      name: "selectedService",
      optionsList: servicesList,
      selectedOption: scheduleData.selectedService,
      getSeletedOption: getData,
    },
    {
      tittle: "atendente",
      name: "selectedEmployee",
      optionsList: employeesList,
      selectedOption: scheduleData.selectedEmployee,
      getSeletedOption: getData,
    },
  ];

  return (
    <section
      id="schedule"
      className="grid sm:grid-cols-[auto_380px] md:grid-cols-2 place-items-center place-content-center bg-linear-135 from-carot via-tanjerina to-yellow md:h-hvh h-full p-2 pb-5 md:pb-0"
    >
      <div className="hidden sm:block relative w-full h-[80%] ">
        <Image src={formBg} alt="" className="object-contain" fill />
      </div>
      <div className=" w-full flex flex-col items-center gap-2 md:gap-4">
        <p className="first-letter:uppercase text-xl font-semibold text-white mt-2">
          faça o seu agendamento
        </p>
        {inputsDataList.map((inp, idx) => (
          <div className="w-fit" key={`input${idx}`}>
            <TextInput
              tittle={inp.tittle}
              placeholde={inp.placeholder}
              getValue={getData}
              name={inp.name}
            />
          </div>
        ))}
        <div className="grid min-[410px]:grid-cols-2 gap-y-2 gap-x-1 w-[90dvw] max-w-95 h-fit">
          {inputListData.map((data, idx) => (
            <div key={`selectInput${idx}`}>
              <p className="first-letter:uppercase text-white md:text-lg">
                {data.tittle}
              </p>
              <ListInput
                name={data.name}
                optionsList={data.optionsList}
                selectedOption={data.selectedOption}
                getSelectedOption={data.getSeletedOption}
              />
            </div>
          ))}
        </div>
        <PetKindToggle getData={getData} />

        <button
          className="cursor-pointer w-fit px-3 py-1 mt-2 flex justify-between items-center gap-2 bg-carot rounded-full  text-white 3xs:text-lg"
          onClick={() => {
            formatData(scheduleData, " ", "%20");
            window.location.href = `https://wa.me/5581992478819?text=Agendamento%0A%0ANome%3A%20${scheduleData.clientName}%0APet%3A%20${scheduleData.petName}%0AServi%C3%A7o%3A%20${scheduleData.selectedService}%0AAtendente%3A%20${scheduleData.selectedEmployee}%0AEspecie%3A%20${scheduleData.petKind}`;
            formatData(scheduleData, "%20", " ");
          }}
        >
          Continuar atendimento pelo whatsapp
          <WhatsappIcon color="#ffffff" className="size-7" />
        </button>
      </div>
    </section>
  );
}
