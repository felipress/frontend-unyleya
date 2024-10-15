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

module.exports = {
    validateIdParams
}