const ObjectId = require("mongoose").Types.ObjectId

const validateIdParams = (req, res, next) => {
    if(ObjectId.isValid(req.params.id)){
        return next();
    }
    else{
        return res.status(400).send({
            message: `O ID informado não é válido.`
        })
    }
}

const validateLogin = (req, res, next) => {
    let errors = []

    validateRequiredAttribute(errors, req.body.email, "email")
    validateRequiredAttribute(errors, req.body.password, "password")

    if(errors.length == 1){
        return res.status(400).send({
            message: `O campo ${errors} é obrigatório.`
        })
    }
    else if(errors.length > 1){
        return res.status(400).send({
            message: `Os campos ${errors} são obrigatórios.`
        })
    }
    else{
        return next()
    }
}

// Private functions
const validateRequiredAttribute = (errorArray, attribute, label) => {
    if(!attribute  || attribute == undefined){
        errorArray.push(label)
    }
}

module.exports = {
    validateIdParams,
    validateLogin
}