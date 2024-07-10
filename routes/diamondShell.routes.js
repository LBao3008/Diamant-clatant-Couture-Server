const express = require("express");
const router = express.Router();
// internal
const diamondShellController = require("../controller/diamondShell.controller");

// add a diamond shell
router.post("/add", diamondShellController.createDiamondShell);
// update a diamond shell
router.patch("/edit/:id", diamondShellController.updateDiamondShell);
// get all diamond shells
router.get("/all", diamondShellController.getAllDiamondShells);
// get a single diamond shell by id
router.get("/:id", diamondShellController.getDiamondShellById);
// delete a diamond shell
router.delete("/:id", diamondShellController.deleteDiamondShell);
// link product to diamond shell
router.post(
  "/link/:diamondShellId/:productId",
  diamondShellController.linkProductToDiamondShell
);
// unlink product from diamond shell
router.post(
  "/unlink/:diamondShellId/:productId",
  diamondShellController.unlinkProductFromDiamondShell
);

module.exports = router;
