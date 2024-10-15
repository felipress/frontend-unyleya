const mongoose = require("mongoose")

const GuestSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "users"},
    museum: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "museums"},
    date: {type: Date, required: true, default: Date.now()}
})

const Guest = mongoose.model("guests", GuestSchema)

module.exports = Guest