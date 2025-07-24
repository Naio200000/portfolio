import mongoose from "mongoose";

const skillShchema = new mongoose.Schema({ 
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    text: { type: String, required: true }
}, {timestamps: true});

const Skills = mongoose.model('Skills', skillShchema);  

export default Skills;