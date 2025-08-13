import mongoose from "mongoose";

// esse model não tem relação com outros models, é apenas para fornecimento de
// dados para o front-end, o back-end não fará nenhum processo com ele =)
const StepSchema = new mongoose.Schema({
  name:String
});

export default mongoose.model("StepModel", StepSchema);
