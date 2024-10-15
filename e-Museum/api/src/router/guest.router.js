const router = require("express").Router()

const GuestController = require("../controller/guest.controller")
const {validateIdParams} = require("../middleware/validation.middleware")

router.get("/findById/:id", validateIdParams, GuestController.findGuestById)
router.get("/findAll", GuestController.findAllGuests)
router.get("/findAllByMuseum/:id", validateIdParams, GuestController.findAllGuestsByMuseum)
router.post("/create", GuestController.createGuest)

module.exports = router