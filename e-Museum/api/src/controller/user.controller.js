const UserService = require("../service/user.service")

const findUserById = async (req, res) => {
    try{
        const user = await UserService.findUserById(req.params.id)
        if(!user){
            return res.status(404).send(
                {message: `Usuário não encontrado.`}
            )
        }
        return res.status(200).send(user)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const findAllUsers = async (req, res) => {
    try{
        const users = await UserService.findAllUsers(req.query.limit, req.query.offset)
        return res.status(200).send(users)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const createUser = async (req, res) => {
    try{
        const user = await UserService.createUser(req.body)
        return res.status(201).send(user)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const updateUser = async (req, res) => {
    try{
        const user = await UserService.updateUser(req.params.id, req.body)
        return res.status(200).send(user)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const removeUser = async (req, res) => {
    try{
        const user = await UserService.removeUser(req.params.id)
        return res.status(200).send(user)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

module.exports = {
    findUserById,
    findAllUsers,
    createUser,
    updateUser,
    removeUser
}