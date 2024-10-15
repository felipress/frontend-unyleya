const Guest = require("../model/Guest")

const findGuestById = (id) => {
    return Guest.findById(id)
}

const findAllGuests = (limit = 30, offset = 0) => {
    return Guest.find().limit(limit).skip(offset)
}

const findAllGuestsByMuseum = (id, limit = 30, offset = 0) => {
    return Guest.findOne({museum: id}).limit(30).skip(offset)
}

const createGuest = (body) => {
    return Guest.create(body)
}


module.exports = {
    findGuestById,
    findAllGuests,
    findAllGuestsByMuseum,
    createGuest
}