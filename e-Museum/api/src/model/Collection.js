const mongoose = require("mongoose")

const CollectionSchema = new mongoose.Schema({
    museum: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "museums"},
    photo: {type: String, required: true},
    registerNumber: {
        number: {type: String, required: true, unique: true},
        otherNumbers: {type: String, required: true}
    },
    name: {type: String, required: true},
    classification: {type: String, required: true},
    production: {
        date: {type: Date},
        location: {type: String}
    },
    description: {type: String},
    material: {type: String},
    author: {type: String},
    location: {type: String},
    acquisition: {
        type: {type: String, required: true},
        comments: {type: String}
    },
    dimension: {
        width: {type: Number},
        height: {type: Number},
        length: {type: Number},
        depth: {type: Number},
    },
    weight: {type: Number},
    conservationState: {type: String},
    usageTerms: {type: String},
    catalogedBy: {type: String},
    comments: {type: String},
    availability: {type: Boolean, required: true, default: true}
})

const Collection = mongoose.model("collection", CollectionSchema)

module.exports = Collection