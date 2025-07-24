import express from 'express';
import { getAllCertifications, getAllExperiences, getAllSkills } from '../controllers/dataController.js';
// import { createCertification, createExperience, createSkill, getAllCertifications, getAllExperiences, getAllSkills } from '../controllers/dataController.js';

const router = express.Router();

router.get('/experiences', getAllExperiences );
router.get('/skills', getAllSkills );
router.get('/certifications', getAllCertifications );
// router.post('/experiences', createExperience );
// router.post('/skills', createSkill );
// router.post('/certifications', createCertification );

export default router;