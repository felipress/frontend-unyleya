const Museum = require("../model/Museum")

const findMuseumById = (id) => {
    return Museum.findById(id)
}

const findAllMuseums = (limit = 10, offset = 0) => {
    return Museum.find().limit(limit).skip(offset)
}

const createMuseum = (body) => {
    return Museum.create(body)
}

const updateMuseum = (id, body) => {
    return Museum.findByIdAndUpdate(id, body, {returnDocument: "after"})
}

const removeMuseum = (id) => {
    return Museum.findByIdAndDelete(id)
}

module.exports = {
    findMuseumById, 
    findAllMuseums,
    createMuseum,
    updateMuseum,
    removeMuseum
}