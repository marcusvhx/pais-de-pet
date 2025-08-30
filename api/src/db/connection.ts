import mongoose from "mongoose";

async function connectDB(){
    try{

        await mongoose.connect(process.env.NEXT_PUBLIC_DB_URI||"")
        console.log("DB conectado");
    }catch(err){
        console.log("falha ao conectar ao db");
        console.log("");
        console.log(err);
        
    }
    
}
export {connectDB}