const User = require("../model/User")

// User functions 
const findUserById = (id) => {
    return User.findById(id)
}

const findAllUsers = (limit, offset) => {
    return User.find().limit(limit).skip(offset)
}

const createUser = (body) => {
    return User.create(body)
}

const updateUser = (id, body) => {
    return User.findByIdAndUpdate(id, body, {returnDocument: "after"})
}

const removeUser = (id) => {
    return User.findByIdAndDelete(id)
}

module.exports = {
    findUserById,
    findAllUsers,
    createUser,
    updateUser,
    removeUser
}