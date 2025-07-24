import Experience from "../models/Experience.js";
import Skill from "../models/Skill.js";
import Certification from "../models/Certification.js";
/**
 * Controller to handle fetching all experiences, certifications, and skills.
 * Each function retrieves data from the respective MongoDB collections and returns it as JSON.
 */

export const getAllExperiences = async (_, res) => {
    try {
        const experinces = await Experience.find().sort({ title: 1 });
        res.status(200).json(experinces);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching expirience",
            error: error,
        });
    }
}

// export const createExperience = async (req, res) => {
//     try {
//         const { title, subtitle, dates, responsability } = req.body;
//         const newExperience = new Experience({
//             title,
//             subtitle,
//             dates,
//             responsability
//         });
//         await newExperience.save();
//         res.status(201).json(newExperience);
//     } catch (error) {
//         res.status(500).json({
//             message: "Error creating experience",
//             error: error,
//         });
//     }
// }

export const getAllCertifications = async (_, res) => {
    try {
        const certifications = await Certification.find().sort({ title: 1 });
        res.status(200).json(certifications);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching certifications",
            error: error,
        });
    }
}

// export const createCertification = async (res, req) => {
//     console.log(req)
//     try {
//         const { title, subtitle, dates } = req.body;
//         const newCertification = new Certification({
//             title,
//             subtitle,
//             dates
//         });
//         await newCertification.save();
//         res.status(201).json(newCertification);
//     } catch (error) {
//         res.status(500).json({
//             message: "Error creating certification",
//             error: error,
//         });
//     }
// }

export const getAllSkills = async (_, res) => {
    try {
       const skills = await Skill.find().sort({ title: 1 });
       res.status(200).json(skills);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching skills",
            error: error,
        });
    }
}

// export const createSkill = async (req, res) => {
//     try {
//         const { title, subtitle, text } = req.body;
//         const newSkill = new Skill({
//             title,
//             subtitle,
//             text
//         });
//         await newSkill.save();
//         res.status(201).json(newSkill);
//     } catch (error) {
//         res.status(500).json({
//             message: "Error creating skill",
//             error: error,
//         });
//     }
// }
