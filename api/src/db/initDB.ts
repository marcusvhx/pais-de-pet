import EmployeeModel from "../models/EmployeeModel";
import ServiceModel from "../models/ServiceModel";
import PetKindModel from "../models/PetKindModel";
import TicketIdModel from "../models/TicketModel";

import { Model } from "mongoose";
import StepModel from "../models/StepModel";

interface CheckListItem {
  name: string;
  model: Model<any>;
  insert: () => Promise<void>;
}

const checkList: CheckListItem[] = [
  { name: "funcionarios", model: EmployeeModel, insert: insertEmployees },
  { name: "serviços", model: ServiceModel, insert: insertServices },
  { name: "pet", model: PetKindModel, insert: insertPetKind },
  { name: "ticket", model: TicketIdModel, insert: insertTicket },
  { name: "etapas", model: StepModel, insert: insertSteps },
];

async function check() {

  checkList.forEach(async (item) => {
    const model = await item.model.find();
    if (model.length > 0) {
      console.log(item.name + " ✅");
    } else {
      console.log(item.name + " ❌");
      item.insert();
    }
})

}

async function insertEmployees() {
  await EmployeeModel.create([
    { id: 1, name: "Dr. Rafael", profession: "veterinario" },
    { id: 2, name: "Nathalia", profession: "banhista" },
    { id: 3, name: "Michele", profession: "banhista" },
  ]);
  console.log("funcionarios adicionados ✅");
}

async function insertServices() {
  await ServiceModel.create([
    { id: 1, name: "banho", employeesIds:[2,3] },
    { id: 2, name: "tosa", employeesIds:[2,3] },
    { id: 3, name: "banho e tosa", employeesIds:[2,3] },
    { id: 4, name: "consulta", employeesIds:[1] },
    { id: 5, name: "vacinação", employeesIds:[1] },
  ]);
  console.log("serviços adicionados ✅");
}

async function insertPetKind() {
  await PetKindModel.create([
    { id: 1, specie: "gato", kind: "persa" },
    { id: 2, specie: "cachorro", kind:"vira-lata" },
  ]);
  console.log("raças adicionadas ✅");
}

async function insertSteps() {
  await StepModel.create([
    { name:"Preparação" },
    { name:"banho" },
    { name:"tosa" },
    { name:"corte de unhas" },
  ]);
  console.log("etapas adicionadas ✅");
}

async function insertTicket() {
  await TicketIdModel.create({ number: 1 });
  console.log("ticket criado ✅");
}


function initDB() {
  check();
}
export { initDB };
