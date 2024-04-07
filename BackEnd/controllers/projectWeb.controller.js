import ProjectWeb from "../models/ProjectWeb.js"

const controller = {
    getProject: (req, res) => {
        
    },
    postProject: async (req, res) => {
        
        const newProjectWeb = await ProjectWeb.create(req.body)

        return res.status(201).json({
            success: true,
            message: 'ProjectWeb create'
        })
    },
    deleteProject: (req, res) => {

    },
    putProject: (req, res) => {

    }
}

export default controller