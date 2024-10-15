const Collection = require("../model/Collection")

const findObjectById = (id) => {
    return Collection.findById(id)
}

const findCollection = (limit = 20, offset = 0) => {
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
    return Collection.findOneAndUpdate(id, body, {returnDocument: "after"})
}


const updateAvailability = (id, availability) => {
    return Collection.findOneAndUpdate(
        {_id: id},
        {
            $set: {availability: availability}
        }
    )
}


module.exports = {
    findObjectById,
    findCollection,
    findCollectionsByMuseuem,
    createObject,
    removeObject,
    updateObject,
    updateAvailability
}