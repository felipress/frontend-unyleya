const MuseumService = require("../service/museum.service")

const findMuseumById = async (req, res) => {
    try{
        const museum = await MuseumService.findMuseumById(req.params.id)
        if(!museum){
            return res.status(404).send({
                message: `Museu não encontrado.`
            })
        }
        return res.status(200).send(museum)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const findAllMuseums = async (req, res) => {
    try{
        const museums = await MuseumService.findAllMuseums()
        return res.status(200).send(museums)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const createMuseum = async (req, res) => {
    try{
        const museum = await MuseumService.createMuseum(req.body)
        return res.status(201).send(museum)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const updateMuseum = async (req, res) => {
    try{
        const museum = await MuseumService.updateMuseum(req.params.id, req.body)
        return res.status(200).send(museum)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const removeMuseum = async (req, res) => {  
    try{
        const museum = await MuseumService.removeMuseum(req.params.id)
        return res.status(200).send(museum)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

module.exports = {
    findMuseumById,
    findAllMuseums,
    createMuseum,
    updateMuseum,
    removeMuseum
}