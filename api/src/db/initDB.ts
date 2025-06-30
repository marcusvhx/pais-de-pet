import EmployeeModel from "./models/EmployeeModel";
import StatusModel from "./models/StatusModel";
import WorkTypeModel from "./models/ServiceModel";
import PetKindModel from "./models/PetKindModel";

async function check() {
  const employees = await EmployeeModel.find();
  if (employees.length > 0) {
    console.log("empregados ✅")
  }else{
    console.log("empregados ❌");
    insertEmployees()
  }

  const worksTypes = await WorkTypeModel.find();
  if (worksTypes.length > 0) {
    console.log("serviços ✅")
  }else{
        console.log("serviços ❌")
        insertWorksTypes()
  }

  const status = await StatusModel.find();
  if (status.length > 0) {
    console.log("status ✅")
  }else{
      console.log("status ❌")
      insertStatuses()
  }

  const petKind = await PetKindModel.find();
  if (petKind.length > 0) {
    console.log("raça do pet ✅")
  }else{
      console.log("raça do pet ❌")
      insertPetKind()
  }
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

function initDB() {
  check();
}
export { initDB };
