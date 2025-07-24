import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    dates: { type: String, required: true },
    responsability: { type: Array, required: true }
 }, {timestamps: true});

const Experience = mongoose.model('Expirience', experienceSchema);

export default Experience;