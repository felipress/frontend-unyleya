const router = require("express").Router()

const GuestController = require("../controller/guest.controller")
const {validateIdParams} = require("../middleware/validation.middleware")
const {auth, adminUser} = require("../middleware/auth.middleware")

router.get("/findById/:id", validateIdParams, auth, adminUser, GuestController.findGuestById)
router.get("/findAll", auth, adminUser, GuestController.findAllGuests)
router.get("/findAllByMuseum/:id", validateIdParams, auth, adminUser, GuestController.findAllGuestsByMuseum)
router.post("/create", auth, adminUser, GuestController.createGuest)

module.exports = router