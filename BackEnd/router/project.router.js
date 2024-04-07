import express from 'express'
import projectController from '../controllers/project.controller.js'

const {getProject, postProject} = projectController

const router = express.Router();


router.get('/',getProject)
router.post('/',postProject)

export default router