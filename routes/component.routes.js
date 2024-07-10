const express = require("express");
const router = express.Router();
// internal
const componentController = require("../controller/component.controller");

// add a component
router.post("/add", componentController.createComponent);
// update a component
router.patch("/edit/:id", componentController.updateComponent);
// get all components
router.get("/all", componentController.getAllComponents);
// get a single component by id
router.get("/:id", componentController.getComponentById);
// delete a component
router.delete("/:id", componentController.deleteComponent);

module.exports = router;
