const Collection = require("../model/Collection")

const findObjectById = (id) => {
    return Collection.findById(id)
}

const findCollections = (limit = 20, offset = 0) => {
    return Collection.find().limit(limit).skip(offset)
}

const findCollectionsByMuseuem = (museum, limit = 20, offset = 0) => {
    return Collection.findOne({museum: museum}).limit(limit).skip(offset)
}

const createObject = (body) => {
    return Collection.create(body)
}

const removeObject = (id) => {
    return Collection.findByIdAndDelete(id)
}

const updateObject = (id, body) => {
    return Collection.findByIdAndUpdate(id, body, {returnDocument: "after"})
}


const updateAvailability = (id, body) => {
    return Collection.findOneAndUpdate(
        {_id: id},
        {
            $set: {availability: body.availability}
        }
    )
}


module.exports = {
    findObjectById,
    findCollections,
    findCollectionsByMuseuem,
    createObject,
    removeObject,
    updateObject,
    updateAvailability
}