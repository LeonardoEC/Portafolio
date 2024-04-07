import {Schema, model, Types} from 'mongoose'

const collection = 'projectsWebs'

const schema = new Schema({
    title: { type:String, required:true },
    state: { type:String, required:true}
},{
    timestamps:true
})

const Project = model(collection, schema)

export default Project