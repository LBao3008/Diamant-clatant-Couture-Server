const express = require("express");
const router = express.Router();
// internal
const materialController = require("../controller/material.controller");

// add a material
router.post("/add", materialController.createMaterial);
// update a material
router.patch("/edit/:id", materialController.updateMaterial);
// get all materials
router.get("/all", materialController.getAllMaterials);
// get a single material by id
router.get("/:id", materialController.getMaterialById);
// delete a material
router.delete("/:id", materialController.deleteMaterial);

module.exports = router;
