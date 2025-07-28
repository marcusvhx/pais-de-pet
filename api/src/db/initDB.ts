import EmployeeModel from "./models/EmployeeModel";
import StatusModel from "./models/StatusModel";
import WorkTypeModel from "./models/ServiceModel";
import PetKindModel from "./models/PetKindModel";
import TicketIdModel from "./models/TicketIdModel";

import { Model } from "mongoose";

interface CheckListItem {
  name: string;
  model: Model<any>;
  insert: () => Promise<void>;
}

const checkList: CheckListItem[] = [
  { name: "funcionarios", model: EmployeeModel, insert: insertEmployees },
  { name: "serviços", model: WorkTypeModel, insert: insertWorksTypes },
  { name: "status", model: StatusModel, insert: insertStatuses },
  { name: "pet", model: PetKindModel, insert: insertPetKind },
  { name: "senha", model: TicketIdModel, insert: insertTicketId },
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

async function insertWorksTypes() {
  await WorkTypeModel.create([
    { id: 1, name: "banho" },
    { id: 2, name: "tosa" },
    { id: 3, name: "banho e tosa" },
    { id: 4, name: "consulta" },
  ]);
  console.log("serviços adicionados ✅");
}

async function insertStatuses() {
  await StatusModel.create([
    { id: 1, name: "pendente" },
    { id: 2, name: "corte de unhas" },
    { id: 3, name: "banho" },
    { id: 4, name: "tosa" },
    { id: 5, name: "pausa" },
    { id: 6, name: "finalizado" },
  ]);
  console.log("status adicionados ✅");
}

async function insertPetKind() {
  await PetKindModel.create([
    { id: 1, name: "gato" },
    { id: 2, name: "cachorro" },
  ]);
  console.log("raças adicionadas ✅");
}

async function insertTicketId() {
  await TicketIdModel.create({ number: 1 });
  console.log("senha criada ✅");
}
function initDB() {
  check();
}
export { initDB };
