const GuestService = require("../service/guest.service")

const findGuestById = async (req, res) => {
    try{
        const guest = await GuestService.findGuestById(req.params.id)
        if(!guest){
            return res.status(404).send({
                message: `Usuário não encontrado, tente novamente.`
            })
        }
        return res.status(200).send(guest)
    }
    catch(err){
        // Retorna erro se ID não está correto, migrar para middleware
        if(err){
            console.log(err.kind == "ObjectId")
            return res.status(400).send({
                message: `O ID informado está incorreto. Tente novamente!`
            })
        }

        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const findAllGuests = async (req, res) => {
    try{
        const guests = await GuestService.findAllGuests(req.query.limit, req.query.offset)
        return res.status(200).send(guests)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const findAllGuestsByMuseum = async (req, res) => {
    try{
        const guests = await GuestService.findAllGuestsByMuseum(req.params.id, req.query.limit, req.query.offset)
        return res.stauts(200).send(guests)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const createGuest = async (req, res) => {
    try{
        const guest = await GuestService.createGuest(req.body)
        return res.status(201),send(guest)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

module.exports = {
    findGuestById,
    findAllGuests,
    findAllGuestsByMuseum,
    createGuest
}