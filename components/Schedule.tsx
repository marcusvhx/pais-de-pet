"use client";
import { useState } from "react";
import PetKindToggle from "./utils/schedule/PetKindToggle";
import ServicesAttendants from "./utils/schedule/ServicesAttendants";
import TextInput from "./utils/TextInput";

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

    if(key=== "selectedService"){
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

  const inputsList = [
    { tittle: "seu nome", placeholder: "ex.: matheus silva", name: "clientName" },
    { tittle: "nome do pet", placeholder: "ex.: cacau", name: "petName" },
  ];

  return (
    <section className="bg-linear-135 from-carot via-tanjerina to-yellow w-full h-120 px-2 flex flex-col items-center gap-4">
      <p className="text-xl font-bold text-white">hora do agendamento</p>
      {inputsList.map((inp, idx) => (
        <div className="col-span-2 w-fit" key={`input${idx}`}>
          <TextInput
            tittle={inp.tittle}
            placeholde={inp.placeholder}
            getValue={getData}
            name={inp.name}
          />
        </div>
      ))}
      <ServicesAttendants
      selectedEmployee={scheduleData.selectedEmployee}
      selectedService={scheduleData.selectedService}
        getData={getData}
        servicesList={servicesList}
        employeesList={employeesList}
      />
      <PetKindToggle />
    </section>
  );
}
