"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDB = initDB;
const EmployeeModel_1 = __importDefault(require("../models/EmployeeModel"));
const ServiceModel_1 = __importDefault(require("../models/ServiceModel"));
const PetKindModel_1 = __importDefault(require("../models/PetKindModel"));
const TicketModel_1 = __importDefault(require("../models/TicketModel"));
const StepModel_1 = __importDefault(require("../models/StepModel"));
const checkList = [
    { name: "funcionarios", model: EmployeeModel_1.default, insert: insertEmployees },
    { name: "serviços", model: ServiceModel_1.default, insert: insertServices },
    { name: "pet", model: PetKindModel_1.default, insert: insertPetKind },
    { name: "ticket", model: TicketModel_1.default, insert: insertTicket },
    { name: "etapas", model: StepModel_1.default, insert: insertSteps },
];
function check() {
    return __awaiter(this, void 0, void 0, function* () {
        checkList.forEach((item) => __awaiter(this, void 0, void 0, function* () {
            const model = yield item.model.find();
            if (model.length > 0) {
                console.log(item.name + " ✅");
            }
            else {
                console.log(item.name + " ❌");
                item.insert();
            }
        }));
    });
}
function insertEmployees() {
    return __awaiter(this, void 0, void 0, function* () {
        yield EmployeeModel_1.default.create([
            { id: 1, name: "Dr. Rafael", profession: "veterinario" },
            { id: 2, name: "Nathalia", profession: "banhista" },
            { id: 3, name: "Michele", profession: "banhista" },
        ]);
        console.log("funcionarios adicionados ✅");
    });
}
function insertServices() {
    return __awaiter(this, void 0, void 0, function* () {
        yield ServiceModel_1.default.create([
            { id: 1, name: "banho", employeesIds: [2, 3] },
            { id: 2, name: "tosa", employeesIds: [2, 3] },
            { id: 3, name: "banho e tosa", employeesIds: [2, 3] },
            { id: 4, name: "consulta", employeesIds: [1] },
            { id: 5, name: "vacinação", employeesIds: [1] },
        ]);
        console.log("serviços adicionados ✅");
    });
}
function insertPetKind() {
    return __awaiter(this, void 0, void 0, function* () {
        yield PetKindModel_1.default.create([
            { id: 1, specie: "gato", kind: "persa" },
            { id: 2, specie: "cachorro", kind: "vira-lata" },
        ]);
        console.log("raças adicionadas ✅");
    });
}
function insertSteps() {
    return __awaiter(this, void 0, void 0, function* () {
        yield StepModel_1.default.create([
            { name: "Preparação" },
            { name: "banho" },
            { name: "tosa" },
            { name: "corte de unhas" },
        ]);
        console.log("etapas adicionadas ✅");
    });
}
function insertTicket() {
    return __awaiter(this, void 0, void 0, function* () {
        yield TicketModel_1.default.create({ number: 1 });
        console.log("ticket criado ✅");
    });
}
function initDB() {
    check();
}
