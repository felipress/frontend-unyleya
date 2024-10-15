const ObjectService = require("../service/object.service")

const findObjectById = async (req, res) => {
    try{
        const object = await ObjectService.findObjectById(req.params.id)
        if(!object){
            return res.status(404).send({
                nessage: `Objeto não encontrado.`
            })
        }
        return res.status(200).send(object)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const findCollection = async (req, res) => {
    try{
        const collection = await ObjectService.findCollection(req.query.limit, req.query.offset)
        return res.status(200).send(collection)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const findCollectionsByMuseuem = async (req, res) => {
    try{
        const collection = await ObjectService.findCollectionsByMuseuem(req.params.id, req.query.limit, req.query.offset)
        return res.status(200).send(collection)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const createObject = async (req, res) => {
    try{
        const object = await ObjectService.createObject(req.body)
        return res.status(201).send(object)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const removeObject = async (req, res) => {
    try{
        const object = await ObjectService.removeObject(req.params.id)
        return res.status(200).send(object)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const updateObject = async (req, res) => {
    try{
        const object = await ObjectService.updateObject(req.params.id, req.body)
        return res.status(200).send(object)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const updateAvailability = async (req, res) => {
    try{
        const object = await ObjectService.updateAvailability(req.params.id, req.body)
        return res.status(200).send(object)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
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