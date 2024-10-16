const router = require("express").Router()
const MuseumController = require("../controller/museum.controller")
const {validateIdParams} = require("../middleware/validation.middleware")
const {auth, adminUser} = require("../middleware/auth.middleware")

router.get("/findById/:id", validateIdParams, MuseumController.findMuseumById)
router.get("/findAll", MuseumController.findAllMuseums)
router.post("/create", auth, adminUser, MuseumController.createMuseum)
router.put("/update/:id", auth, adminUser, MuseumController.updateMuseum)
router.delete("/remove/:id", auth, adminUser, MuseumController.removeMuseum)

module.exports = router