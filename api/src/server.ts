import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db/connection";
import { createId } from "./utils/createId";
import { parser } from "./utils/envParser";
import { initDB } from "./db/initDB";
import ServiceModel from "./db/models/ServiceModel";
import EmployeeModel from "./db/models/EmployeeModel";
import StatusModel from "./db/models/StatusModel";
import AppointmentModel from "./db/models/AppointmentModel";
import PetkindModel from "./db/models/PetKindModel";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json()); // parse pra JSON
app.use(
  cors({
    origin: parser(process.env.CORS_ORIGIN || ""),
  })
);
connectDB(); // conecta a api ao mongo

app.post("/scheduling", async (req, res) => {
  const idCode = createId(); // codigo de id do trabalho
  const {
    petKindId, // id da raça do pet
    typeId, // id do tipo de trabalho
    employeeId, // id do funcionario responsavel
  } = req.body;
  try {
    const newWork = await AppointmentModel.create({
      id: idCode,
      petKindId,
      workTypeId: typeId,
      employeeId,
      statusId: 1,
    });

    res.json(newWork);
  } catch (error) {
    console.log("erro ao cria trabalho");
    console.log(error);
  }
});

app.get("/appointment/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const work = await AppointmentModel.findOne({ id });
    if (!work) {
      res.status(404).json({ error: "Appointment not found" });
      return;
    }
    const employee = await EmployeeModel.findOne({ id: work.employeeId });
    const petKind = await PetkindModel.findOne({ id: work.petKindId });
    const service = await ServiceModel.findOne({ id: work.serviceId });
    const status = await StatusModel.findOne({ id: work.statusId });
    res.json({
      id: work.id,
      petKind: petKind?.name,
      service: service?.name,
      employee: employee?.name,
      status: status?.name,
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/all-services", async (req, res) => {
  try {
    const works = await ServiceModel.find();
    res.json(works);
  } catch (err) {
    console.log(err);
  }
});

app.get("/all-status", async (req, res) => {
  try {
    const status = await StatusModel.find();
    res.json(status);
  } catch (err) {
    console.log(err);
  }
});

app.get("/all-appointments", async (req, res) => {
  try {
    const appointments = await AppointmentModel.find();
    res.json(appointments);
  } catch (err) {
    console.log(err);
  }
});

app.delete("/all", async (req, res) => {
  try {
    await ServiceModel.deleteMany();
    await AppointmentModel.deleteMany();
    await EmployeeModel.deleteMany();
    await StatusModel.deleteMany();
    res.send("deletado");
  } catch (error) {
    console.log(error);
  }
});

app.delete("/service/:id", async (req, res) => {
  const { id } = req.params;
  await ServiceModel.findOneAndDelete({ id });
  res.send("deletado: " + id);
});

initDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
