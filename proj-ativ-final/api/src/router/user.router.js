const router = require("express").Router()
const UserController = require("../controller/user.controller")
const {validateIdParams} = require("../middleware/validation.middleware")

router.get("/findById/:id", validateIdParams, UserController.findUserById)
router.get("/findAll", UserController.findAllUsers)
router.post("/create", UserController.createUser)
router.put("/update/:id", validateIdParams, UserController.updateUser)
router.delete("/remove/:id", validateIdParams, UserController.removeUser)

module.exports = router