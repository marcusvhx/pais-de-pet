import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db/connection";
import { parser } from "./utils/envParser";
import { initDB } from "./db/initDB";

import { Appointment } from "./models/Appointment";
import { Employee } from "./models/Employee";
import { Path } from "./models/Path";

import ServiceModel from "./db/models/ServiceModel";
import PetKindModel from "./db/models/PetKindModel";
import StepModel from "./db/models/StepModel";
import { Ticket } from "./models/Ticket";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// middlewares
app.use(express.json()); // parse pra JSON
app.use(
  cors({
    origin: parser(process.env.CORS_ORIGIN || ""),
  })
);
connectDB(); // conecta a api ao mongo

const appointment = new Appointment();
const employee = new Employee();
const path = new Path();
const ticket = new Ticket()

app.post("/scheduling", async (req, res) => {
  const {
    petKindId, // id da raça do pet
    serviceId, // id do trabalho
    employeeId, // id do funcionario responsavel
    steps, // etapas do trabalho
  }: {
    petKindId: 1 | 2;
    serviceId: number;
    employeeId: number;
    steps: string[];
  } = req.body;

  if (petKindId > 2 || petKindId < 1) {
    res.status(400).json({ msg: "Id da raça inválida" });
    return;
  }
  try {
    const newAppointment = await appointment.create({
      employeeId,
      petKindId,
      serviceId,
      steps,
    });

    res.json(newAppointment);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Erro ao criar agendamento" });
  }
});

app.post("/step", async (req, res) => {
  const { name }: { name: string } = req.body;
  try {
    const newStep = await new Path().createStep(name);

    res.json(newStep);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Erro ao criar agendamento" });
  }
});

app.put("/next-step/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const path = await new Path().nextStep(Number(id));

    if (!path) {
      res.status(404).json({ msg: "etapas não encontradas" });
      return;
    }

    res.json(path);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Erro ao avançar etapa" });
  }
});

app.get("/path/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const wantedPath = await path.getById(Number(id));

    if (!wantedPath) {
      res.status(404).json({ msg: "etapas não encontrado" });
      return;
    }

    res.json(wantedPath);
  } catch (err) {
    res.status(500).json({ msg: "Erro ao buscar etapas" });
  }
});

app.get("/appointment/:id", async (req, res) => {
  const { id } = req.params;
  try {
    res.json(await appointment.getById(id));
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Erro ao buscar agendamento" });
  }
});

app.get("/all-services", async (_, res) => {
  try {
    const services = await ServiceModel.find();
    res.json(services);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Erro ao buscar serviços" });
  }
});

app.get("/all-path", async (_, res) => {
  try {
    const steps = await path.getAll();
    res.json(steps);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Erro ao buscar as etapas dos serviços" });
  }
});

app.get("/all-appointments", async (_, res) => {
  try {
    const appointments = await appointment.getAll();
    res.json(appointments);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Erro ao buscar agendamentos" });
  }
});

app.get("/all-employees", async (_, res) => {
  try {
    const employees = await new Employee().getAll();
    res.json(employees);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Erro ao buscar funcionários" });
  }
});

app.delete("/all", async (_, res) => {
  try {
    await appointment.deleteAll();
    await employee.deleteAll();
    await path.deleteAll();
    await PetKindModel.deleteMany()
    await ServiceModel.deleteMany();
    await StepModel.deleteMany();
    await ticket.resetTickets()
    res.send("deletado");
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Erro ao deletar tudo" });
  }
});

app.delete("/appointment/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await appointment.deleteById(id);
    res.send("deletado: " + id);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Erro ao deletar agendamento" });
  }
});

initDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
