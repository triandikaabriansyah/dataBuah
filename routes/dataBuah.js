const express = require("express")
const router = express.Router()
const dataBuahController = require("../controller/dataBuahController")

router.get("/", dataBuahController.index)
router.get("/create", dataBuahController.create)
router.post("/", dataBuahController.store)
router.get("/:id/edit", dataBuahController.edit)
router.put("/:id", dataBuahController.update)
router.delete("/:id", dataBuahController.destroy)
module.exports = router