import mongoose from "mongoose";


export default async function connection(){
    const db=await mongoose.connect('mongodb+srv://hetile6515:ZKMdW5rkdOp4RLkB@cluster0.vq0kp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log("database connected");
    
    return db
}