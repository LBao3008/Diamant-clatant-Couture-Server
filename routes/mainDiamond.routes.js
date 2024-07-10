const express = require("express");
const router = express.Router();
// internal
const mainDiamondController = require("../controller/mainDiamond.controller");

// add a main diamond
router.post("/add", mainDiamondController.createMainDiamond);
// update a main diamond
router.patch("/edit/:id", mainDiamondController.updateMainDiamond);
// get all main diamonds
router.get("/all", mainDiamondController.getAllMainDiamonds);
// get a single main diamond by id
router.get("/:id", mainDiamondController.getMainDiamondById);
// delete a main diamond
router.delete("/:id", mainDiamondController.deleteMainDiamond);
// link product to main diamond
router.post(
  "/link/:mainDiamondId/:productId",
  mainDiamondController.linkProductToMainDiamond
);
// unlink product from main diamond
router.post(
  "/unlink/:mainDiamondId/:productId",
  mainDiamondController.unlinkProductFromMainDiamond
);

module.exports = router;
