import express from 'express'
import certificateRouter from './certificate.router.js'
import projectRouter from './project.router.js'
import independentRouter from './independent.router.js'
import institutionRouter from './institution.router.js'

const router = express.Router();

router.get('/', (req,res) => {
    res.send("Un texto")
})

router.use('/certificates', certificateRouter)
router.use('/institutions', institutionRouter)
router.use('/projects', projectRouter)
router.use('/independent', independentRouter)

export default router