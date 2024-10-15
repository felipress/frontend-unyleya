const mongoose = require("mongoose")

const MuseumSchema = new mongoose.Schema({
    type: {type: String, required: true},
    name: {type: String, required: true},
    acronymn: {type: String},
    foundation: {type: Date, required: true},
    address: {
        street: {type: String, required: true},
        number: {type: Number, required: true},
        complement: {type: String},
        neighborhood: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        zipcode: {type: String, required: true},
    },
    phone: {type: Number},
    email: {type: String},
    website: {type: String},
    accountable: {
        name: {type: String, required: true},
        position: {type: String, required: true},
        email: {type: String}
    },
    createdAt: {type: Date, default: Date.now()}
})

const Museum = mongoose.model("museums", MuseumSchema)

module.exports = Museum