const router = require("express").Router()
const UserController = require("../controller/user.controller")
const {validateIdParams} = require("../middleware/validation.middleware")
const {auth, adminUser} = require("../middleware/auth.middleware")

router.get("/findById/:id", auth, validateIdParams, UserController.findUserById)
router.get("/findAll", auth, adminUser, UserController.findAllUsers)
router.post("/create", UserController.createUser)
router.put("/update/:id", auth, validateIdParams, UserController.updateUser)
router.delete("/remove/:id", auth, validateIdParams, UserController.removeUser)

module.exports = router