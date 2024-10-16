const router = require("express").Router()
const AuthController = require("../controller/auth.controller")
const {validateLogin} = require("../middleware/validation.middleware")

router.post("/login", validateLogin, AuthController.login)

module.exports = router