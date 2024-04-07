import {Schema, model, Types} from 'mongoose'

const collection = 'user'

const schema = new Schema({
    name: {type: String, require:true},
    lastName: {type: String, require:true},
    linkedin: {type: String, require:true},
    git: {type: String, require:true},
    photo: {type: String},
    logo: {type: String}
})