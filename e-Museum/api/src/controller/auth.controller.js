const AuthService = require("../service/auth.service")
const bcrypt = require("bcrypt")

const login = async (req, res) => {
    try{
        const {email, password} = req.body
        const user = await AuthService.login(email)
    
        if(user){
            // Compares if the sent password matches the stored in database
            if(await bcrypt.compare(password, user.password)){
                const userId = user.id
                const token = AuthService.generateToken(userId)
                return res.status(200).send({
                    email,
                    userId,
                    token
                })
            }
        }
        
        return res.status(401).send({
            message: `E-mail ou senha inválidos.`
        })
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

module.exports = {
    login
}