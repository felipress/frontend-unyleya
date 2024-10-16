const router = require("express").Router()
const CollectionController = require("../controller/collection.controller")
const {validateIdParams} = require("../middleware/validation.middleware")
const {auth, adminUser}  = require("../middleware/auth.middleware")

router.get("/findById/:id", validateIdParams, auth, CollectionController.findObjectById)
router.get("/findAll", auth, CollectionController.findCollections)
router.get("/findCollectionByMuseum/:id", validateIdParams, auth, adminUser, CollectionController.findCollectionsByMuseum)
router.post("/create", auth, adminUser, CollectionController.createObject)
router.delete("/remove/:id", validateIdParams, auth, adminUser, CollectionController.removeObject)
router.put("/update/:id", validateIdParams, auth, adminUser, CollectionController.updateObject)
router.patch("/updateAvailability/:id", validateIdParams, auth, adminUser, CollectionController.updateAvailability)

module.exports = router