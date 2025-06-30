"use client";
import { useEffect, useState } from "react";
import PetKindToggle from "./PetKindToggle";
import TextInput from "./TextInput";
import ListInput from "./ListInput";
import Image from "next/image";
import formBg from "@/public/images/backgrounds/form-bg.svg";
import WhatsappIcon from "@/public/icons/whatsapp";
import { useCookies } from "next-client-cookies";
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
const kindsList = [
  { name: "gato", color: "bg-red-400" },
  { name: "cachorro", color: "bg-orange-400" },
];
const servicesList = servicesEmployeesList.map((obj) => obj.service); // lista de serviços

export default function Schedule({}: {}) {
  const cookies = useCookies();

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

  // formata strings de objetos trocando elementos por outros
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
      value: scheduleData.clientName,
    },
    {
      tittle: "nome do pet",
      placeholder: "ex.: cacau",
      name: "petName",
      value: scheduleData.petName,
    },
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

  const sendData = () => {
    cookies.set("username", scheduleData.clientName); // salva o nome do cliente
    cookies.set("petName", scheduleData.petName); // salva o nome do pet

    // acha o index da especie do pet na lista de especies
    const kindIdx = kindsList.findIndex(
      (el) => el.name == scheduleData.petKind
    );
    cookies.set("petKind", JSON.stringify(kindIdx)); // salva a especie do pet

    // acha o index do serviço na lista
    const serviceIdx = servicesEmployeesList.findIndex(
      (el) => el.service == scheduleData.selectedService
    );
    cookies.set("selectedService", JSON.stringify(serviceIdx)); //salva o index do serviço

    // acha o index do funcionário na lista de funcionários de um serviço
    const employeeIdx = servicesEmployeesList[serviceIdx].employees.findIndex(
      (emp) => emp == scheduleData.selectedEmployee
    );
    cookies.set("selectedEmployee", JSON.stringify(employeeIdx)); // salva o index do funcionario

    formatData(scheduleData, " ", "%20"); // substitue espaços por %20 para o whatsapp
    window.location.href = `https://wa.me/5581992478819?text=Agendamento%0A%0ANome%3A%20${scheduleData.clientName}%0APet%3A%20${scheduleData.petName}%0AServi%C3%A7o%3A%20${scheduleData.selectedService}%0AAtendente%3A%20${scheduleData.selectedEmployee}%0AEspecie%3A%20${scheduleData.petKind}`;
    formatData(scheduleData, "%20", " "); // volta os %20 para espaços, para o caso de o user voltar
  };
  useEffect(() => {
    setScheduleData({
      clientName: cookies.get("username") || "",
      petName: cookies.get("petName") || "",
      selectedService:
        servicesList[Number(cookies.get("selectedService")) || 0],
      selectedEmployee:
        employeesList[Number(cookies.get("selectedEmployee")) || 0],
      petKind: kindsList[Number(cookies.get("petKind"))]?.name || "",
    });
  }, []);

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
              value={inp.value}
              tittle={inp.tittle}
              placeholder={inp.placeholder}
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
        <PetKindToggle
          defaultOption={scheduleData.petKind}
          kindsList={kindsList}
          getData={getData}
        />

        <button
          className="cursor-pointer w-fit px-3 py-1 mt-2 flex justify-between items-center gap-2 bg-carot rounded-full  text-white 3xs:text-lg"
          onClick={sendData}
        >
          Continuar atendimento pelo whatsapp
          <WhatsappIcon color="#ffffff" className="size-7" />
        </button>
      </div>
    </section>
  );
}
