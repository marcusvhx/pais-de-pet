import PathModel from "../db/models/PathModel";
import StepModel from "../db/models/StepModel";
import { Ticket } from "./Ticket";

export class Path {
  async getAll() {
    try {
      const paths = await PathModel.find();
      return paths;
    } catch (err) {
      console.error("Erro ao buscar todos os paths");
      throw err;
    }
  }

  async create(steps: string[]) {
    try {
      const path = await PathModel.create({
        id: await new Ticket().getTicket(),
        paused: false,
        currentPosition: 0,
        steps: steps,
      });

      return path;
    } catch (err) {
      console.error("Erro ao criar path", err);
      throw err;
    }
  }

  async createStep(name: string) {
    try {
      await StepModel.create({ name });
      return { msg: "Etapa criada com sucesso" };
    } catch (err) {
      console.error("Erro ao criar etapa");
      throw err;
    }
  }

  async deleteStep(name: string) {
    try {
      await StepModel.findOneAndDelete({ name });
      return { msg: "Etapa removida com sucesso" };
    } catch (err) {
      console.error("Erro ao remover etapa");
      throw err;
    }
  }

  async nextStep(id: number) {
    try {
      const path = await PathModel.findOneAndUpdate(
        { id },
        { $inc: { currentPosition: 1 } },
        { new: true }
      );
      return path;
    } catch (err) {
      console.error("Erro ao avançar etapa", err);
      throw err;
    }
  }

  async getById(id: number) {
    try {
      const path = await PathModel.findOne({ id });
      if (!path) throw Error("Path não encontrado");
      return path;
    } catch (err) {
      console.error("Erro ao buscar path");
      throw err;
    }
  }

  async togglePause(id: number) {
    try {
      await PathModel.findOneAndUpdate({ id }, [
        { $set: { paused: { $not: "$paused" } } },
      ]);
    } catch (err) {
      console.error("Erro ao pausar/despausar path");
      throw err;
    }
  }

  async deleteAll(){
    try{

      await PathModel.deleteMany()
    }catch(err){
      console.error("Erro ao deletar path")
      throw err
    }
  }
}
