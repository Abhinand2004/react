import mongoose from "mongoose";

const person = new mongoose.Schema({
    name: { type: String },  
    photo:{type:String},
    designation:{type:String}


});





export default mongoose.model.person||mongoose.model('person',person) 