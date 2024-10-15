const CollectionService = require("../service/collection.service")

const findObjectById = async (req, res) => {
    try{
        const object = await CollectionService.findObjectById(req.params.id)
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

const findCollections = async (req, res) => {
    try{
        const collection = await CollectionService.findCollections(req.query.limit, req.query.offset)
        return res.status(200).send(collection)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const findCollectionsByMuseum = async (req, res) => {
    try{
        const collection = await CollectionService.findCollectionsByMuseuem(req.params.id, req.query.limit, req.query.offset)
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
        const object = await CollectionService.createObject(req.body)
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
        const object = await CollectionService.removeObject(req.params.id)
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
        const object = await CollectionService.updateObject(req.params.id, req.body)
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
        const object = await CollectionService.updateAvailability(req.params.id, req.body)
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
    findCollections,
    findCollectionsByMuseum,
    createObject,
    removeObject,
    updateObject,
    updateAvailability
}