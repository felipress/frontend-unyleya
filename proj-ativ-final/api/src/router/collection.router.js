const router = require("express").Router()
const CollectionController = require("../controller/collection.controller")
const {validateIdParams} = require("../middleware/validation.middleware")

router.get("/findById/:id", validateIdParams, CollectionController.findObjectById)
router.get("/findAll", CollectionController.findCollections)
router.get("/findCollectionByMuseum/:id", validateIdParams, CollectionController.findCollectionsByMuseum)
router.post("/create", CollectionController.createObject)
router.delete("/remove/:id", validateIdParams, CollectionController.removeObject)
router.put("/update/:id", validateIdParams, CollectionController.updateObject)
router.patch("/updateAvailability/:id", validateIdParams, CollectionController.updateAvailability)

module.exports = router