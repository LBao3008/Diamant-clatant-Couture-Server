const express = require("express");
const router = express.Router();
// internal
const sideStoneController = require("../controller/sideStone.controller");

// add a side stone
router.post("/add", sideStoneController.createSideStone);
// update a side stone
router.patch("/edit/:id", sideStoneController.updateSideStone);
// get all side stones
router.get("/all", sideStoneController.getAllSideStones);
// get a single side stone by id
router.get("/:id", sideStoneController.getSideStoneById);
// delete a side stone
router.delete("/:id", sideStoneController.deleteSideStone);
// link product to side stone
router.post(
  "/link/:sideStoneId/:productId",
  sideStoneController.linkProductToSideStone
);
// unlink product from side stone
router.post(
  "/unlink/:sideStoneId/:productId",
  sideStoneController.unlinkProductFromSideStone
);

module.exports = router;
