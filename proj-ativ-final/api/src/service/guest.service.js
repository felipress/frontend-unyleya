const Guest = require("../model/Guest")

const findGuestById = (id) => {
    return Guest.findById(id)
}

const findAllGuests = () => {
    return Guest.find()
}

const findAllGuestsByMuseum = (id) => {
    return Guest.findOne({museum: id})
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