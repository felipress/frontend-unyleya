const mongoose = require("mongoose")

const connectToDatabase = () => {
    try{
        mongoose.connect(process.env.DATABASE)
        console.log(`Serivdor MongoDB conectado.`)
    }
    catch(error){
        console.log(`Não foi possível se conectar ao MongoDB. Erro: ${error}`)
    }
}

module.exports = connectToDatabase