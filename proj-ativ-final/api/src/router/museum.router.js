const router = require("express").Router()
const MuseumController = require("../controller/museum.controller")
const {validateIdParams} = require("../middleware/validation.middleware")

router.get("/findById/:id", validateIdParams, MuseumController.findMuseumById)
router.get("/findAll", MuseumController.findAllMuseums)
router.post("/create", MuseumController.createMuseum)
router.put("/update/:id", MuseumController.updateMuseum)
router.delete("/remove/:id", MuseumController.removeMuseum)

module.exports = router